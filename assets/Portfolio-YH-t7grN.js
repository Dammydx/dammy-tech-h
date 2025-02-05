import{r as l,j as e}from"./index-C32CYNR8.js";const n=()=>{const[i,a]=l.useState("all"),s=[{id:"1",title:"Gaming PC Build & Setup",description:"Custom gaming PC build with RGB lighting, liquid cooling, and high-performance components.",image:"https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",category:"gaming"},{id:"2",title:"Corporate Office Network Setup",description:"Complete network infrastructure setup for a 50-employee office space.",image:"https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",category:"office"},{id:"3",title:"Laptop Repair & Upgrade",description:"Major repair and performance upgrade for a business laptop including SSD and RAM upgrade.",image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",category:"repair"},{id:"4",title:"Security System Installation",description:"CCTV and access control system installation for a retail store.",image:"https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",category:"security"},{id:"5",title:"Desktop Workstation Setup",description:"Professional workstation setup with dual monitors and ergonomic accessories.",image:"https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",category:"office"},{id:"6",title:"Server Room Organization",description:"Complete server room cable management and organization project.",image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",category:"office"}],o=["all","gaming","office","repair","security"],r=i==="all"?s:s.filter(t=>t.category===i);return e.jsxs("div",{className:"space-y-16",children:[e.jsxs("section",{className:"relative h-[400px] -mt-8 flex items-center",children:[e.jsx("div",{className:"absolute inset-0",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",alt:"Portfolio Background",className:"w-full h-full object-cover opacity-25"})}),e.jsxs("div",{className:"relative max-w-4xl mx-auto text-center px-4",children:[e.jsx("h1",{className:"text-4xl md:text-6xl font-bold text-white mb-6",children:"Our Portfolio"}),e.jsx("p",{className:"text-xl md:text-2xl text-gray-300",children:"Showcasing Our Best Work"})]})]}),e.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:o.map(t=>e.jsx("button",{onClick:()=>a(t),className:`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${i===t?"bg-blue-600 text-white":"bg-white/5 text-gray-300 hover:bg-blue-500/10"}`,children:t.charAt(0).toUpperCase()+t.slice(1)},t))})}),e.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:r.map(t=>e.jsxs("div",{className:"group bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300",children:[e.jsxs("div",{className:"relative h-64",children:[e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"})]}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:t.title}),e.jsx("p",{className:"text-gray-400 mb-4",children:t.description}),e.jsx("span",{className:"inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm",children:t.category.charAt(0).toUpperCase()+t.category.slice(1)})]})]},t.id))})}),e.jsx("section",{className:"bg-white/5 py-16",children:e.jsxs("div",{className:"max-w-4xl mx-auto text-center px-4",children:[e.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"Ready to Start Your Project?"}),e.jsx("p",{className:"text-gray-400 mb-8",children:"Let us help you bring your vision to life with our expert IT solutions."}),e.jsx("a",{href:"/contact",className:"inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200",children:"Get Started"})]})})]})};export{n as default};
