import { Users, AlertTriangle, CheckCircle, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { useAuth } from '@/contexts/AuthContext'

const Dashboard = () => {
  const { user } = useAuth()

  const stats = [
    { title: "Active Alerts", value: "3", icon: AlertTriangle, color: "text-red-500" },
    { title: "Completed Checks", value: "12", icon: CheckCircle, color: "text-green-500" },
    { title: "Response Time", value: "2.4 min", icon: Clock, color: "text-blue-500" },
    { title: "Community Members", value: "1,247", icon: Users, color: "text-purple-500" }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.user_metadata?.full_name || user?.email}!</h1>
          <p className="text-gray-600 mt-2">Here's your disaster management overview</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={stat.title} className="hover-lift animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle>How the System Works</CardTitle>
              <CardDescription>Quick overview of SafeHaven features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <p className="text-gray-700"><strong>Alerts:</strong> Receive real-time disaster notifications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <p className="text-gray-700"><strong>Report:</strong> Submit disaster reports to authorities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-warning text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <p className="text-gray-700"><strong>Checklist:</strong> Follow emergency preparedness steps</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient">
            <CardHeader>
              <CardTitle>Emergency Contacts</CardTitle>
              <CardDescription>Important numbers to keep handy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                  <span className="font-medium">Emergency Services</span>
                  <span className="text-red-600 font-bold">911</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="font-medium">Disaster Hotline</span>
                  <span className="text-blue-600 font-bold">1-800-HELP</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                  <span className="font-medium">Local Emergency</span>
                  <span className="text-green-600 font-bold">(555) 123-4567</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard