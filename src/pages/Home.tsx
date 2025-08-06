import { Shield, Phone, AlertTriangle, Users, TrendingUp, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Navbar from '@/components/layout/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  const stats = [
    { label: "Active Users", value: "12,453", icon: Users, change: "+12%" },
    { label: "Alerts Sent", value: "8,947", icon: AlertTriangle, change: "+8%" },
    { label: "Response Time", value: "2.4 min", icon: Clock, change: "-15%" },
    { label: "Coverage Area", value: "95%", icon: TrendingUp, change: "+5%" }
  ]

  const emergencyContacts = [
    { name: "Emergency Services", number: "911", type: "Police, Fire, Medical" },
    { name: "Disaster Hotline", number: "1-800-HELP", type: "24/7 Support" },
    { name: "Local Emergency", number: "(555) 123-4567", type: "Regional Support" },
    { name: "Red Cross", number: "1-800-RED-CROSS", type: "Humanitarian Aid" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 px-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="animate-fade-in">
            <Shield className="h-20 w-20 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              SafeHaven
              <span className="text-primary block text-4xl md:text-5xl mt-2">
                Response Hub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive disaster management system ensuring community safety through 
              real-time alerts, coordinated response, and emergency preparedness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/register">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/login">Access Dashboard</Link>
              </Button>
              <Button variant="emergency" size="lg">
                <Phone className="h-5 w-5 mr-2" />
                Emergency Help
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-Time Impact
            </h2>
            <p className="text-lg text-gray-600">
              Our system delivers results that save lives and protect communities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="card-gradient hover-lift animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                  <div className="text-sm text-success font-medium">{stat.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About SafeHaven
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our mission is to build resilient communities through advanced disaster 
              management technology and coordinated emergency response systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  How Our System Works
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Early Detection</h4>
                      <p className="text-gray-600">Advanced monitoring systems detect potential disasters before they occur</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Instant Alerts</h4>
                      <p className="text-gray-600">Real-time notifications reach all registered users immediately</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-warning text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Coordinated Response</h4>
                      <p className="text-gray-600">Emergency teams coordinate through our centralized command system</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-success text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Recovery Support</h4>
                      <p className="text-gray-600">Post-disaster recovery resources and community support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Features</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <span className="text-gray-700">Real-time Disaster Alerts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Emergency Response Coordination</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="text-gray-700">Community Preparedness Tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-success" />
                  <span className="text-gray-700">Risk Assessment & Prediction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts Section */}
      <section id="emergency" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Emergency Contacts
            </h2>
            <p className="text-lg text-gray-600">
              Important numbers to have readily available during emergencies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={contact.name} className="card-emergency hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{contact.name}</h3>
                      <p className="text-sm text-gray-600">{contact.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emergency">{contact.number}</div>
                      <Button variant="emergency" size="sm" className="mt-2">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600">
              Get in touch with our team for support or more information
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="card-gradient text-center hover-lift">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Get help from our support team</p>
                <p className="text-primary font-semibold">support@safehaven.com</p>
              </CardContent>
            </Card>
            
            <Card className="card-gradient text-center hover-lift">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Speak directly with our team</p>
                <p className="text-accent font-semibold">1-800-SAFEHAVEN</p>
              </CardContent>
            </Card>
            
            <Card className="card-gradient text-center hover-lift">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-warning mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Our headquarters location</p>
                <p className="text-warning font-semibold">123 Safety Blvd<br />Response City, RC 12345</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <span className="font-bold text-2xl">SafeHaven</span>
          </div>
          <p className="text-gray-400 mb-6">
            Building safer communities through technology and preparedness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link to="/login">Dashboard Access</Link>
            </Button>
            <Button variant="emergency">
              <Phone className="h-4 w-4 mr-2" />
              Emergency: 911
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400">
            <p>&copy; 2024 SafeHaven Response Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home