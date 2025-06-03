
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Eye, User, Calendar, MapPin, Star } from "lucide-react";
import { generateMockApplications } from "@/mock-data/generator";
import { Application } from "@/types";
import { StatusBadge } from "@/components/ui/status-badge";

export default function ApplicationQueue() {
  const [applications] = useState<Application[]>(generateMockApplications(50));
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApplications = applications.filter(app => {
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || 
      (priorityFilter === "P1" && Math.random() > 0.7) ||
      (priorityFilter === "P2" && Math.random() > 0.5) ||
      (priorityFilter === "P3" && Math.random() > 0.3);
    const matchesSearch = searchTerm === "" || 
      app.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStatus && matchesPriority && matchesSearch;
  });

  const getPriorityCode = () => {
    const codes = ['P1', 'P2', 'P3'];
    return codes[Math.floor(Math.random() * codes.length)];
  };

  const getScore = () => {
    return (Math.random() * 20).toFixed(1);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Søknadskø</h1>
          <p className="text-gray-600">Behandle og prioriter barnehagesøknader</p>
        </div>
        <Button>
          Generer tilbud
        </Button>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtre og søk
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Søk søknads-ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle statuser</SelectItem>
                <SelectItem value="submitted">Innsendt</SelectItem>
                <SelectItem value="reviewed">Vurdert</SelectItem>
                <SelectItem value="offered">Tilbud sendt</SelectItem>
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

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Distrikt" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle distrikter</SelectItem>
                <SelectItem value="gamle-oslo">Gamle Oslo</SelectItem>
                <SelectItem value="grunerlokka">Grünerløkka</SelectItem>
                <SelectItem value="sagene">Sagene</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <User className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Totale søknader</p>
                <p className="text-2xl font-bold">{applications.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Venter på behandling</p>
                <p className="text-2xl font-bold">{Math.floor(applications.length * 0.3)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Tilbud sendt</p>
                <p className="text-2xl font-bold">{Math.floor(applications.length * 0.4)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Star className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Plassert</p>
                <p className="text-2xl font-bold">{Math.floor(applications.length * 0.3)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Applications Table */}
      <Card>
        <CardHeader>
          <CardTitle>Søknader ({filteredApplications.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Søknads-ID</TableHead>
                <TableHead>Barn</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Prioritet</TableHead>
                <TableHead>Poeng</TableHead>
                <TableHead>Innsendt</TableHead>
                <TableHead>Handlinger</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.slice(0, 20).map((application) => (
                <TableRow key={application.id}>
                  <TableCell className="font-medium">{application.id.slice(0, 8)}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">Barn #{application.childId.slice(0, 8)}</p>
                      <p className="text-sm text-gray-500">Foresatt: #{application.guardianId.slice(0, 8)}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={application.status} />
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      getPriorityCode() === 'P1' ? 'destructive' : 
                      getPriorityCode() === 'P2' ? 'default' : 'secondary'
                    }>
                      {getPriorityCode()}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono">{getScore()}</TableCell>
                  <TableCell>{application.createdAt.toLocaleDateString('nb-NO')}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
