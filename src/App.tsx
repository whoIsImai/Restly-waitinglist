import './App.css'
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Mail } from "lucide-react";
import Avatar from './components/Avatar';

export default function App() {

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Preview mode - email captured:", email);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <Card className="max-w-lg w-full bg-gray-900 text-white shadow-2xl rounded-2xl p-6">
        <CardContent className="space-y-6">
          <h1 className="text-3xl font-bold text-center">
            Join Restly's Launch Waiting List
          </h1>
            <p className="text-center text-gray-300">
              Restly is a platform that connects tenants with property owners, BnBs with travelers, and people with amazing property listings.
            </p>

            <p className="text-center">
              Who is Restly?
            <br />
              - Its a student starting a new journey of college or Uni and looking for a place to stay. <br />
              - Its a traveler looking for a place to stay for a few days or weeks even months. <br />
              - Its a family looking for a new home. <br />
              - Its property owners looking for tenants. <br />
              - Its a BnB owner looking for travelers. <br />
             </p> 
           
            <strong>Get notified when we launch!</strong>
            <br />
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white placeholder-gray-500 border border-gray-600"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">
                Notify Me
              </Button>
                <div className="flex items-center justify-center mt-8 relative">
                  <div className="flex -space-x-2 mr-4">
                    <Avatar initials="JD" index={0} />
                    <Avatar initials="AS" index={1} />
                    <Avatar initials="MK" index={2} />
                  </div>
                  <p className="text-white font-semibold m-0">50+ people on the waitlist.</p>
                </div>
           
            </form>
          ) : (
            <div className="text-center text-green-400 flex flex-col items-center">
              <CheckCircle className="w-10 h-10 mb-2" />
              <p>You're on the list! We'll keep you posted.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}


