
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useApplicationStore } from "@/stores/applicationStore";
import { generateMockApplications, generateMockPriorityScores, generateMockOffers } from "@/mock-data/generator";
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  TrendingUp,
  Calendar,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseManagerDashboard() {
  const { applications, priorityScores, offers, setApplications } = useApplicationStore();
  
  useEffect(() => {
    // Load mock data
    const mockApplications = generateMockApplications();
    const mockScores = generateMockPriorityScores();
    const mockOffers = generateMockOffers();
    setApplications(mockApplications);
  }, [setApplications]);

  const getStats = () => {
    const totalApplications = applications.length;
    const pendingReview = applications.filter(app => app.status === 'submitted').length;
    const offersGenerated = applications.filter(app => app.status === 'offered').length;
    const confirmedPlacements = applications.filter(app => app.status === 'confirmed').length;
    
    const roundStats = {
      mainPart1: applications.filter(app => app.admissionRound === 'main_part1').length,
      mainPart2: applications.filter(app => app.admissionRound === 'main_part2').length,
      ongoing: applications.filter(app => app.admissionRound === 'ongoing').length,
    };

    const priorityStats = {
      p1: priorityScores.filter(score => score.priorityCode === 'P1').length,
      p2: priorityScores.filter(score => score.priorityCode === 'P2').length,
      p3: priorityScores.filter(score => score.priorityCode === 'P3').length,
    };

    return {
      totalApplications,
      pendingReview,
      offersGenerated,
      confirmedPlacements,
      roundStats,
      priorityStats,
    };
  };

  const stats = getStats();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Saksbehandler Dashboard</h1>
        <p className="text-gray-600">Oversikt over søknader og opptak</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Totale søknader</p>
                <p className="text-2xl font-bold">{stats.totalApplications}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Venter vurdering</p>
                <p className="text-2xl font-bold">{stats.pendingReview}</p>
              </div>
              <Clock className="h-8 w-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tilbud sendt</p>
                <p className="text-2xl font-bold">{stats.offersGenerated}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Bekreftede plasser</p>
                <p className="text-2xl font-bold">{stats.confirmedPlacements}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Admission Rounds Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Hovedopptak del 1</CardTitle>
            <CardDescription>Frist: 1. mars</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">{stats.roundStats.mainPart1}</p>
                <p className="text-sm text-gray-600">søknader</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-500" />
            </div>
            <Button className="w-full mt-4" asChild>
              <Link to="/case-manager/queue?round=main_part1">
                Behandle søknader
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Hovedopptak del 2</CardTitle>
            <CardDescription>Frist: 15. august</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">{stats.roundStats.mainPart2}</p>
                <p className="text-sm text-gray-600">søknader</p>
              </div>
              <Calendar className="h-8 w-8 text-green-500" />
            </div>
            <Button className="w-full mt-4" asChild>
              <Link to="/case-manager/queue?round=main_part2">
                Behandle søknader
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Løpende opptak</CardTitle>
            <CardDescription>Kontinuerlig</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">{stats.roundStats.ongoing}</p>
                <p className="text-sm text-gray-600">søknader</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
            <Button className="w-full mt-4" asChild>
              <Link to="/case-manager/queue?round=ongoing">
                Behandle søknader
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Priority Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Prioritetsfordeling
          </CardTitle>
          <CardDescription>
            Oversikt over prioritetskoder i systemet
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <p className="text-2xl font-bold text-red-600">{stats.priorityStats.p1}</p>
              <p className="text-sm text-red-700">P1 - Høy prioritet</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <p className="text-2xl font-bold text-yellow-600">{stats.priorityStats.p2}</p>
              <p className="text-sm text-yellow-700">P2 - Medium prioritet</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-2xl font-bold text-gray-600">{stats.priorityStats.p3}</p>
              <p className="text-sm text-gray-700">P3 - Lav prioritet</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Hurtighandlinger</CardTitle>
          <CardDescription>
            Vanlige oppgaver for saksbehandling
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild className="h-auto p-4 flex-col">
              <Link to="/case-manager/queue">
                <FileText className="h-6 w-6 mb-2" />
                <span>Behandle søknadskø</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 flex-col">
              <Link to="/case-manager/reports">
                <BarChart3 className="h-6 w-6 mb-2" />
                <span>Generer rapporter</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 flex-col">
              <Link to="/case-manager/settings">
                <Users className="h-6 w-6 mb-2" />
                <span>Systeminnstillinger</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
