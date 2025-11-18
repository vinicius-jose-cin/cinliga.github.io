import { X, Clock, MapPin, Users } from 'lucide-react';
import { Badge } from './ui/badge';
import { leagueDescriptions } from '../data/league-descriptions';

interface EventModalProps {
  event: {
    time: string;
    title: string;
    type: string;
    organization: string;
    location: string;
    description: string;
    duration: string;
  };
  onClose: () => void;
}

export function EventModal({ event, onClose }: EventModalProps) {
  const typeConfig: { [key: string]: { label: string; color: string } } = {
    palestra: { label: 'Palestra', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
    workshop: { label: 'Workshop', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    minicurso: { label: 'Minicurso', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
    oficina: { label: 'Oficina', color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
    abertura: { label: 'Abertura', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' }
  };

  const config = typeConfig[event.type] || typeConfig.palestra;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-black border border-neutral-800 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700 transition-colors"
        >
          <X className="w-5 h-5 text-neutral-400" />
        </button>

        {/* Header */}
        <div className="p-8 border-b border-neutral-800">
          <div className="flex flex-wrap items-start gap-3 mb-4">
            <Badge variant="outline" className={`${config.color} border`}>
              {config.label}
            </Badge>
          </div>
          
          <h2 className="text-3xl text-white mb-6">
            {event.title}
          </h2>

          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 text-neutral-400">
              <Users className="w-4 h-4 text-red-400" />
              <span>{event.organization}</span>
            </div>
            
            <div className="flex items-center gap-2 text-neutral-400">
              <MapPin className="w-4 h-4 text-red-400" />
              <span>{event.location}</span>
            </div>

            <div className="flex items-center gap-2 text-neutral-400">
              <Clock className="w-4 h-4 text-red-400" />
              <span>{event.time}</span>
            </div>

            {event.duration && (
              <div className="flex items-center gap-2 text-neutral-400">
                <Clock className="w-4 h-4 text-red-400" />
                <span>{event.duration}</span>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="p-8 border-b border-neutral-800">
          <h3 className="text-xl text-white mb-4">Sobre a Atividade</h3>
          <p className="text-neutral-300 whitespace-pre-line leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* About the Academic League */}
        {event.organization !== 'Todas as ligas' && (
          <div className="p-8">
            <h3 className="text-xl text-white mb-4">Sobre a Liga</h3>
            <p className="text-neutral-300 leading-relaxed">
              {leagueDescriptions[event.organization] || 'Descrição da liga acadêmica ' + event.organization + ' será adicionada em breve. Esta seção conterá informações sobre os objetivos, áreas de atuação e projetos desenvolvidos pela liga.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}