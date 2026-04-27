from pathlib import Path

base = Path(r'd:\all websites\vite-react-template\src\react-app')
replacements = {
    'pages/Home.tsx': [
        ('text-lg sm:text-xl text-gray-300', 'text-lg sm:text-xl text-slate-600'),
        ('text-4xl font-black text-white', 'text-4xl font-black text-slate-900'),
        ('text-5xl font-black text-white', 'text-5xl font-black text-slate-900'),
        ('text-gray-400', 'text-slate-500'),
        ('text-gray-300', 'text-slate-600'),
        ('text-white/70', 'text-slate-500'),
        ('bg-slate-950/80', 'bg-white/90'),
        ('bg-slate-950/70', 'bg-white/70'),
        ('bg-slate-950/90', 'bg-white/90'),
        ('bg-slate-900/80', 'bg-slate-50'),
        ('border border-white/10', 'border border-slate-200'),
        ('shadow-slate-950/20', 'shadow-slate-200/40'),
        ('hover:border-cyan-300/40', 'hover:border-blue-300/40'),
        ('bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/90', 'bg-white/90'),
        ('text-white/90', 'text-slate-900/95'),
        ('text-white', 'text-slate-900'),
    ],
    'pages/Contact.tsx': [
        ('className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl backdrop-blur-xl"',
         'className="space-y-6 rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur-xl"'),
        ('className="space-y-2 text-sm text-gray-300"', 'className="space-y-2 text-sm text-slate-600"'),
        ('className="font-semibold text-white"', 'className="font-semibold text-slate-900"'),
        ('className="w-full rounded-3xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"',
         'className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20"'),
        ('className="rounded-3xl bg-red-500/10 p-4 text-sm text-red-200 border border-red-500/20"',
         'className="rounded-3xl bg-red-50 p-4 text-sm text-red-700 border border-red-200"'),
        ('className="rounded-3xl bg-emerald-500/10 p-4 text-sm text-emerald-200 border border-emerald-500/20"',
         'className="rounded-3xl bg-emerald-50 p-4 text-sm text-emerald-700 border border-emerald-200"'),
    ],
    'components/ServiceCard.tsx': [
        ('className="group rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 text-white transition duration-300 hover:border-cyan-300/40 hover:shadow-2xl hover:shadow-cyan-500/10"',
         'className="group rounded-[2rem] border border-slate-200 bg-white/90 p-6 text-slate-900 transition duration-300 hover:border-blue-300/40 hover:shadow-2xl hover:shadow-blue-200/40"'),
        ('<h3 className="text-xl font-semibold text-white">', '<h3 className="text-xl font-semibold text-slate-900">'),
        ('text-gray-300', 'text-slate-600'),
    ],
    'components/ProjectCard.tsx': [
        ('className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950/80 shadow-2xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1"',
         'className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white/90 shadow-2xl shadow-slate-200/40 transition duration-300 hover:-translate-y-1"'),
        ('className="h-48 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-5"',
         'className="h-48 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 p-5"'),
        ('text-cyan-300/80', 'text-blue-700/80'),
        ('<h3 className="text-xl font-bold text-white">', '<h3 className="text-xl font-bold text-slate-900">'),
        ('className="space-y-3 p-5 text-gray-300"', 'className="space-y-3 p-5 text-slate-600"'),
    ],
    'pages/Terms.tsx': [
        ('border border-white/10 bg-slate-950/80', 'border border-slate-200 bg-white/90'),
        ('shadow-2xl shadow-blue-500/10', 'shadow-2xl shadow-slate-200/40'),
        ('text-white">', 'text-slate-900">'),
        ('text-gray-400', 'text-slate-500'),
        ('text-gray-300', 'text-slate-600'),
        ('text-white/70', 'text-slate-500'),
    ],
    'pages/Privacy.tsx': [
        ('border border-white/10 bg-slate-950/80', 'border border-slate-200 bg-white/90'),
        ('shadow-2xl shadow-blue-500/10', 'shadow-2xl shadow-slate-200/40'),
        ('text-white">', 'text-slate-900">'),
        ('text-gray-400', 'text-slate-500'),
        ('text-gray-300', 'text-slate-600'),
        ('text-white/70', 'text-slate-500'),
    ],
    'pages/Refund.tsx': [
        ('border border-white/10 bg-slate-950/80', 'border border-slate-200 bg-white/90'),
        ('shadow-2xl shadow-blue-500/10', 'shadow-2xl shadow-slate-200/40'),
        ('text-white">', 'text-slate-900">'),
        ('text-gray-400', 'text-slate-500'),
        ('text-gray-300', 'text-slate-600'),
        ('text-white/70', 'text-slate-500'),
    ],
}

for relative, reps in replacements.items():
    path = base / relative
    text = path.read_text(encoding='utf-8')
    for old, new in reps:
        if old not in text:
            print('MISSING', relative, repr(old))
        text = text.replace(old, new)
    path.write_text(text, encoding='utf-8')
print('done')
