import { motion } from 'framer-motion';

const colorMap = {
  primary: { dot: 'bg-primary', badge: 'bg-primary/10 text-primary', ring: 'ring-primary/20' },
  'accent-orange': { dot: 'bg-accent-orange', badge: 'bg-accent-orange/10 text-accent-orange', ring: 'ring-accent-orange/20' },
  'accent-pink': { dot: 'bg-accent-pink', badge: 'bg-accent-pink/10 text-accent-pink', ring: 'ring-accent-pink/20' },
  'accent-green': { dot: 'bg-accent-green', badge: 'bg-accent-green/10 text-accent-green', ring: 'ring-accent-green/20' },
  'accent-blue': { dot: 'bg-accent-blue', badge: 'bg-accent-blue/10 text-accent-blue', ring: 'ring-accent-blue/20' },
  'accent-yellow': { dot: 'bg-accent-yellow', badge: 'bg-accent-yellow/10 text-accent-yellow', ring: 'ring-accent-yellow/20' },
};

export default function Timeline({ data }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-8">
        {data.map((item, index) => {
          const colors = colorMap[item.color] || colorMap.primary;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative flex gap-6 md:gap-8"
            >
              {/* Dot */}
              <div className={`relative z-10 shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full ${colors.dot}/10 ring-4 ${colors.ring}
                flex items-center justify-center text-xl md:text-2xl bg-card shadow-sm`}
              >
                {item.icon}
              </div>

              {/* Card */}
              <div className="bg-card rounded-2xl p-5 md:p-6 shadow-sm border border-border flex-1 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold ${colors.badge}`}>
                    {item.year}
                  </span>
                  <span className="text-xs text-text-secondary uppercase tracking-wider font-medium">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-1">{item.title}</h3>
                <p className="text-sm text-primary/70 font-medium mb-2">{item.location}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
