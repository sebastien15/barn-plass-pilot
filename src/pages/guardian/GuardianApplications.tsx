
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/ui/status-badge";
import { useApplicationStore } from "@/stores/applicationStore";
import { useAuthStore } from "@/stores/authStore";
import { generateMockApplications } from "@/mock-data/generator";
import { Search, Plus, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { nb } from "date-fns/locale";

export default function GuardianApplications() {
  const { user } = useAuthStore();
  const { applications, setApplications } = useApplicationStore();
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    // Load mock data
    const mockApplications = generateMockApplications().filter(
      app => app.guardianId === user?.id
    );
    setApplications(mockApplications);
  }, [user?.id, setApplications]);

  const myApplications = applications.filter(app => app.guardianId === user?.id);
  
  const filteredApplications = myApplications.filter(application =>
    application.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    application.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Mine søknader</h1>
          <p className="text-gray-600">Oversikt over alle dine barnehagesøknader</p>
        </div>
        <Button asChild>
          <Link to="/guardian/applications/new">
            <Plus className="h-4 w-4 mr-2" />
            Ny søknad
          </Link>
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Søk i søknader..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="text-gray-400 mb-4">
                <Calendar className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {myApplications.length === 0 ? 'Ingen søknader funnet' : 'Ingen resultater'}
              </h3>
              <p className="text-gray-600 mb-4">
                {myApplications.length === 0 
                  ? 'Du har ikke sendt inn noen søknader ennå.'
                  : 'Prøv et annet søkeord.'
                }
              </p>
              {myApplications.length === 0 && (
                <Button asChild>
                  <Link to="/guardian/applications/new">Send inn første søknad</Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          filteredApplications.map((application) => (
            <Card key={application.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Søknad {application.id}</CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Sendt: {format(application.createdAt, 'dd. MMMM yyyy', { locale: nb })}
                      </span>
                      <span>
                        Opptaksrunde: {
                          application.admissionRound === 'main_part1' ? 'Hovedopptak del 1' :
                          application.admissionRound === 'main_part2' ? 'Hovedopptak del 2' : 'Løpende opptak'
                        }
                      </span>
                    </CardDescription>
                  </div>
                  <StatusBadge status={application.status} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Ønsker barnehager</p>
                    <p className="text-sm text-gray-600">
                      {application.preferences.length} barnehager valgt
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Lovfestet rett</p>
                    <p className="text-sm text-gray-600">
                      {application.statutoryRight ? 'Ja' : 'Nei'}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" asChild>
                    <Link to={`/guardian/applications/${application.id}`}>Se detaljer</Link>
                  </Button>
                  {application.status === 'draft' && (
                    <Button asChild>
                      <Link to={`/guardian/applications/${application.id}/edit`}>
                        Fortsett utfylling
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
