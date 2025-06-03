
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuthStore } from "@/stores/authStore";
import { generateMockUsers } from "@/mock-data/generator";
import { User } from "@/types";
import { useNavigate } from "react-router-dom";
import { Building2, Shield } from "lucide-react";

export default function Login() {
  const [selectedUser, setSelectedUser] = useState<string>("");
  const { login } = useAuthStore();
  const navigate = useNavigate();
  
  const mockUsers = generateMockUsers();
  
  const handleLogin = () => {
    const user = mockUsers.find(u => u.id === selectedUser);
    if (user) {
      login(user);
      // Navigate based on role
      switch (user.role) {
        case 'guardian':
          navigate('/guardian');
          break;
        case 'case_manager':
          navigate('/case-manager');
          break;
        case 'kindergarten_staff':
          navigate('/staff');
          break;
        case 'admin':
          navigate('/admin');
          break;
        default:
          navigate('/');
      }
    }
  };

  const getRoleUsers = (role: string) => {
    return mockUsers.filter(u => u.role === role);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Building2 className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Oslo Kommune</h1>
          <p className="text-gray-600">Barnehage Opptak og Plassering</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Innlogging
            </CardTitle>
            <CardDescription>
              Velg brukerrolle for å teste systemet
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Foresatte ({getRoleUsers('guardian').length} brukere)
                </label>
                <Select value={selectedUser} onValueChange={setSelectedUser}>
                  <SelectTrigger>
                    <SelectValue placeholder="Velg foresatt" />
                  </SelectTrigger>
                  <SelectContent>
                    {getRoleUsers('guardian').slice(0, 10).map((user) => (
                      <SelectItem key={user.id} value={user.id}>
                        {user.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Saksbehandlere ({getRoleUsers('case_manager').length} brukere)
                </label>
                <Select value={selectedUser} onValueChange={setSelectedUser}>
                  <SelectTrigger>
                    <SelectValue placeholder="Velg saksbehandler" />
                  </SelectTrigger>
                  <SelectContent>
                    {getRoleUsers('case_manager').map((user) => (
                      <SelectItem key={user.id} value={user.id}>
                        {user.name} - {user.district}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Barnehage ansatte ({getRoleUsers('kindergarten_staff').length} brukere)
                </label>
                <Select value={selectedUser} onValueChange={setSelectedUser}>
                  <SelectTrigger>
                    <SelectValue placeholder="Velg ansatt" />
                  </SelectTrigger>
                  <SelectContent>
                    {getRoleUsers('kindergarten_staff').slice(0, 10).map((user) => (
                      <SelectItem key={user.id} value={user.id}>
                        {user.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Administratorer ({getRoleUsers('admin').length} brukere)
                </label>
                <Select value={selectedUser} onValueChange={setSelectedUser}>
                  <SelectTrigger>
                    <SelectValue placeholder="Velg administrator" />
                  </SelectTrigger>
                  <SelectContent>
                    {getRoleUsers('admin').map((user) => (
                      <SelectItem key={user.id} value={user.id}>
                        {user.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={handleLogin} 
              disabled={!selectedUser}
              className="w-full"
            >
              Logg inn
            </Button>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-gray-500">
          Dette er en prototype med mock-data for testing av Oslo Kommune barnehagesystem
        </div>
      </div>
    </div>
  );
}
