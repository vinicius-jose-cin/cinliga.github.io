import { Clock, MapPin, Users } from 'lucide-react';
import { Badge } from './ui/badge';

interface ProgramCardProps {
  time: string;
  title: string;
  type: 'palestra' | 'workshop' | 'minicurso' | 'oficina' | 'abertura';
  organization: string;
  location: string;
  onClick?: () => void;
}

export function ProgramCard({ time, title, type, organization, location, onClick }: ProgramCardProps) {
  const typeConfig = {
    palestra: { label: 'Palestra', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
    workshop: { label: 'Workshop', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    minicurso: { label: 'Minicurso', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
    oficina: { label: 'Oficina', color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
    abertura: { label: 'Abertura', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' }
  };

  const config = typeConfig[type];

  return (
    <div 
      className="group bg-[#231f20] backdrop-blur border border-rose-400 rounded-xl p-6 hover:border-red-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5 cursor-pointer" 
      onClick={onClick}
    >
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Time Section */}
        <div className="flex-shrink-0">
          <div className="flex items-center gap-2 text-red-400 sm:flex-col sm:items-start">
            <Clock className="w-5 h-5 text-red-400" />
            <span className="text-white">{time}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px bg-red-200 group-hover:bg-red-400 transition-colors"></div>

        {/* Content Section */}
        <div className="flex-1 space-y-4">
          <div>
            <div className="flex flex-wrap items-start gap-3 mb-3">
              <Badge variant="outline" className={`${config.color} border`}>
                {config.label}
              </Badge>
            </div>
            
            <h3 className="text-xl text-white mb-3 group-hover:text-red-400 transition-colors">
              {title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 text-neutral-400">
              <Users className="w-4 h-4" />
              <span>{organization}</span>
            </div>
            
            <div className="flex items-center gap-2 text-neutral-400">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}