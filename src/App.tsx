import { ProgramCard } from './components/ProgramCard';
import { MapPin, Heart, Calendar, Clock, Ticket } from 'lucide-react';
import { useState } from 'react';
import { Fundo } from './Fundo';
import { Logo } from './components/Logo';
import { AscomLogo } from './components/AscomLogo';
import { EventModal } from './components/EventModal';
import { schedule } from './data/schedule';
import roboCinLogo from 'figma:asset/b9953be3282673e75c94c1656e746d53f5cadf30.png';

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState<{
    time: string;
    title: string;
    type: string;
    organization: string;
    location: string;
    description: string;
    duration: string;
  } | null>(null);
  const infoItems = [
  { icon: Calendar, text: "26/11" },
  { icon: Clock, text: "9h - 17h" },
  { icon: MapPin, text: "Centro de Informática - UFPE" }
];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#da1e2f] to-[#ad0421] relative">
      {/* Logo Background Pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <Fundo className="min-w-full min-h-full object-cover opacity-5" />
      </div>
      
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
          <div className="bg-red-900/20 border-1 border-white rounded-2xl max-w-3xl mx-auto p-8">
            <div className="text-center flex flex-col items-center">
              <Logo className="w-full max-w-lg h-auto mb-6" />
                <div className="flex flex-wrap items-center justify-center gap-4 text-neutral-400">
                {infoItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md">
                  <item.icon className="w-5 h-5 text-neutral-700" />
                  <span className="text-neutral-900">{item.text}</span>
                  </div>
                  ))}
                </div>
                
              <a 
                href="https://www.sympla.com.br/evento/cinliga-showcase-das-ligas-academicas-do-cin/3221208"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex items-center gap-2 bg-white px-3 py-3 rounded-md hover:bg-neutral-50 transition-colors"
              >
                <Ticket className="w-5 h-5 text-neutral-700" />
                <span className="text-neutral-900">INGRESSOS</span>
              </a>
              </div>
            </div>
          </div>
        </div>

      {/* Cronograma */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white mb-4">Programação</h2>
          <p className="text-neutral-100">
            Confira todas as atividades programadas para o evento
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {schedule.map((item, index) => (
            <ProgramCard
              key={index}
              time={item.time}
              title={item.title}
              type={item.type}
              organization={item.organization}
              location={item.location}
              onClick={() => {
                const eventData = item;
                setSelectedEvent({
                  ...item,
                  description: eventData?.description || 'Descrição em breve.',
                  duration: eventData?.duration || ''
                });
              }}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 py-7 text-center space-y-4">
          <div className="flex items-center justify-center gap-6 mb-6">
            <AscomLogo className="w-12 h-12" />
          </div>
          
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>Feito com</span>
            <Heart className="size-4 fill-white text-white" />
            <span>pela</span>
            <a 
              href="https://ascom.cin.ufpe.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              ASCOM CIn
            </a>
          </div>
          
          <p className="text-sm text-white/70">
            Não nos responsabilizamos por eventuais mudanças na programação do CInLiga
          </p>
          
          <p className="text-xs text-white/50">
            Última atualização: 17 de novembro de 2025, 10:25
          </p>
        </div>
      </div>
      
      {/* Event Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}
