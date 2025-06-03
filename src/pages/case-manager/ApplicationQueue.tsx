
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StatusBadge } from "@/components/ui/status-badge";
import { useApplicationStore } from "@/stores/applicationStore";
import { generateMockApplications, generateMockPriorityScores } from "@/mock-data/generator";
import { Search, Filter, Eye, Edit, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { nb } from "date-fns/locale";

export default function ApplicationQueue() {
  const { applications, priorityScores, setApplications } = useApplicationStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roundFilter, setRoundFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  
  useEffect(() => {
    // Load mock data
    const mockApplications = generateMockApplications();
    const mockScores = generateMockPriorityScores();
    setApplications(mockApplications);
  }, [setApplications]);

  const filteredApplications = applications
    .filter(application => {
      const matchesSearch = application.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "all" || application.status === statusFilter;
      const matchesRound = roundFilter === "all" || application.admissionRound === roundFilter;
      
      if (priorityFilter !== "all") {
        const score = priorityScores.find(s => s.applicationId === application.id);
        if (!score || score.priorityCode !== priorityFilter) return false;
      }
      
      return matchesSearch && matchesStatus && matchesRound;
    })
    .sort((a, b) => {
      // Sort by priority score (highest first)
      const scoreA = priorityScores.find(s => s.applicationId === a.id)?.score || 0;
      const scoreB = priorityScores.find(s => s.applicationId === b.id)?.score || 0;
      return scoreB - scoreA;
    });

  const getScoreForApplication = (applicationId: string) => {
    return priorityScores.find(score => score.applicationId === applicationId);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Søknadskø</h1>
        <p className="text-gray-600">Behandle og vurder innkomne søknader</p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtrering og søk
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Søk søknad ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Velg status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle statuser</SelectItem>
                <SelectItem value="submitted">Innsendt</SelectItem>
                <SelectItem value="reviewed">Vurdert</SelectItem>
                <SelectItem value="offered">Tilbud sendt</SelectItem>
                <SelectItem value="confirmed">Bekreftet</SelectItem>
              </SelectContent>
            </Select>

            <Select value={roundFilter} onValueChange={setRoundFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Opptaksrunde" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle runder</SelectItem>
                <SelectItem value="main_part1">Hovedopptak del 1</SelectItem>
                <SelectItem value="main_part2">Hovedopptak del 2</SelectItem>
                <SelectItem value="ongoing">Løpende opptak</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Prioritet" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle prioriteter</SelectItem>
                <SelectItem value="P1">P1 - Høy</SelectItem>
                <SelectItem value="P2">P2 - Medium</SelectItem>
                <SelectItem value="P3">P3 - Lav</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setStatusFilter("all");
                setRoundFilter("all");
                setPriorityFilter("all");
              }}
            >
              Nullstill
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold">{filteredApplications.length}</p>
              <p className="text-sm text-gray-600">Viste søknader</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold">{filteredApplications.filter(app => app.status === 'submitted').length}</p>
              <p className="text-sm text-gray-600">Venter vurdering</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold">{filteredApplications.filter(app => app.statutoryRight).length}</p>
              <p className="text-sm text-gray-600">Lovfestet rett</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold">
                {Math.round(filteredApplications.reduce((sum, app) => {
                  const score = getScoreForApplication(app.id);
                  return sum + (score?.score || 0);
                }, 0) / filteredApplications.length * 10) / 10 || 0}
              </p>
              <p className="text-sm text-gray-600">Gjennomsnittsscore</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Ingen søknader funnet
              </h3>
              <p className="text-gray-600">
                Prøv å justere filterkriteriene dine.
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredApplications.map((application) => {
            const score = getScoreForApplication(application.id);
            return (
              <Card key={application.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        Søknad {application.id}
                        {application.statutoryRight && (
                          <Award className="h-4 w-4 text-yellow-500" title="Lovfestet rett" />
                        )}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4 mt-1">
                        <span>
                          Sendt: {format(application.createdAt, 'dd. MMMM yyyy', { locale: nb })}
                        </span>
                        <span>
                          Runde: {
                            application.admissionRound === 'main_part1' ? 'Hovedopptak del 1' :
                            application.admissionRound === 'main_part2' ? 'Hovedopptak del 2' : 'Løpende opptak'
                          }
                        </span>
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <StatusBadge status={application.status} />
                      {score && <StatusBadge status={score.priorityCode} />}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Prioritetsscore</p>
                      <p className="text-lg font-bold text-blue-600">
                        {score ? score.score.toFixed(1) : 'Ikke beregnet'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Ønskede barnehager</p>
                      <p className="text-sm text-gray-600">
                        {application.preferences.length} valgt
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Verifikasjonsstatus</p>
                      <p className="text-sm text-gray-600">
                        {application.verificationStatus === 'auto_validated' ? 'Auto-validert' :
                         application.verificationStatus === 'manually_verified' ? 'Manuelt verifisert' :
                         'Venter manuell verifikasjon'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/case-manager/applications/${application.id}`}>
                        <Eye className="h-4 w-4 mr-1" />
                        Se detaljer
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link to={`/case-manager/applications/${application.id}/score`}>
                        <Edit className="h-4 w-4 mr-1" />
                        Juster score
                      </Link>
                    </Button>
                    {application.status === 'reviewed' && (
                      <Button variant="destructive" size="sm">
                        Generer tilbud
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
}
