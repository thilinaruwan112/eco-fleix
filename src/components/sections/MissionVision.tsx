import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Check } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4">Our Purpose</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            MISSION & VISION
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide sustainable e-waste solutions and deliver exceptional value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 flex flex-col items-center gap-4">
              <div className="bg-green-100 rounded-full p-4 mb-2">
                <div className="bg-white rounded-full p-2">
                    <Eye className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Vision
              </h3>
              <p className="text-muted-foreground">
                To create a world where electronic waste is completely eliminated through innovative recycling solutions and sustainable practices.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 flex flex-col items-center gap-4">
                <div className="bg-green-100 rounded-full p-4 mb-2">
                    <div className="bg-white rounded-full p-2">
                        <Check className="h-8 w-8 text-primary" />
                    </div>
                </div>
              <h3 className="text-2xl font-bold text-foreground">
                Mission
              </h3>
              <p className="text-muted-foreground">
                To provide comprehensive e-waste management services while ensuring environmental protection and data security for our clients.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
