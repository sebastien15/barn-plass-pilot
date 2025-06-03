
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { useApplicationStore } from "@/stores/applicationStore";
import { useAuthStore } from "@/stores/authStore";
import { generateMockApplications, generateMockOffers } from "@/mock-data/generator";
import { FileText, Clock, CheckCircle, AlertCircle, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { nb } from "date-fns/locale";

export default function GuardianDashboard() {
  const { user } = useAuthStore();
  const { applications, offers, setApplications } = useApplicationStore();
  
  useEffect(() => {
    // Load mock data
    const mockApplications = generateMockApplications().filter(
      app => app.guardianId === user?.id
    );
    const mockOffers = generateMockOffers().filter(
      offer => mockApplications.some(app => app.id === offer.applicationId)
    );
    setApplications(mockApplications);
  }, [user?.id, setApplications]);

  const myApplications = applications.filter(app => app.guardianId === user?.id);
  const activeOffers = offers.filter(offer => 
    myApplications.some(app => app.id === offer.applicationId) && 
    offer.status === 'pending'
  );

  const getStatusStats = () => {
    const stats = {
      draft: myApplications.filter(app => app.status === 'draft').length,
      submitted: myApplications.filter(app => app.status === 'submitted').length,
      offered: myApplications.filter(app => app.status === 'offered').length,
      confirmed: myApplications.filter(app => app.status === 'confirmed').length,
    };
    return stats;
  };

  const stats = getStatusStats();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Velkommen tilbake, {user?.name}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Totale søknader</p>
                <p className="text-2xl font-bold">{myApplications.length}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Ventende tilbud</p>
                <p className="text-2xl font-bold">{activeOffers.length}</p>
              </div>
              <Clock className="h-8 w-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Bekreftede plasser</p>
                <p className="text-2xl font-bold">{stats.confirmed}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Sendte tilbud</p>
                <p className="text-2xl font-bold">{stats.offered}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Offers */}
      {activeOffers.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              Ventende tilbud - Handling kreves
            </CardTitle>
            <CardDescription>
              Du har {activeOffers.length} tilbud som venter på svar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {activeOffers.map((offer) => {
                const application = myApplications.find(app => app.id === offer.applicationId);
                return (
                  <div key={offer.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Barnehage tilbud</p>
                      <p className="text-sm text-gray-600">
                        Frist: {format(offer.deadline, 'dd. MMMM yyyy', { locale: nb })}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <StatusBadge status={offer.status} />
                      <Button asChild size="sm">
                        <Link to={`/guardian/offers/${offer.id}`}>Se tilbud</Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Applications */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Mine søknader</CardTitle>
              <CardDescription>
                Oversikt over alle dine barnehagesøknader
              </CardDescription>
            </div>
            <Button asChild>
              <Link to="/guardian/applications/new">
                <Plus className="h-4 w-4 mr-2" />
                Ny søknad
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {myApplications.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Du har ikke sendt inn noen søknader ennå</p>
              <Button asChild className="mt-4">
                <Link to="/guardian/applications/new">Send inn første søknad</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {myApplications.slice(0, 5).map((application) => (
                <div key={application.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Søknad {application.id}</p>
                    <p className="text-sm text-gray-600">
                      Sendt inn: {format(application.createdAt, 'dd. MMMM yyyy', { locale: nb })}
                    </p>
                    <p className="text-sm text-gray-600">
                      Opptaksrunde: {
                        application.admissionRound === 'main_part1' ? 'Hovedopptak del 1' :
                        application.admissionRound === 'main_part2' ? 'Hovedopptak del 2' : 'Løpende opptak'
                      }
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusBadge status={application.status} />
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/guardian/applications/${application.id}`}>Se detaljer</Link>
                    </Button>
                  </div>
                </div>
              ))}
              {myApplications.length > 5 && (
                <div className="text-center pt-4">
                  <Button variant="outline" asChild>
                    <Link to="/guardian/applications">Se alle søknader</Link>
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
