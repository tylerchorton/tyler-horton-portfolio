import ProjectCard from "./ProjectCard";

const projects = [

{
title:"Built By Titans",
director:"Ritesh Gupta",
thumbnail:"/projects/titans/thumbnail-bw.jpg",
hoverVideo:"/projects/titans/hover-loop.mp4",
vimeo:"https://player.vimeo.com/video/1110989775",
featured:false,
aspectRatio: "wide",
gridSpan:"wide"
},

{
title:"Peloton | Let Yourself Go",
director:"Bethany Vargas",
thumbnail:"/projects/peloton/peloton_thumbnail.jpg",
hoverVideo:"/projects/peloton/peloton_loop.mp4",
vimeo:"https://player.vimeo.com/video/1194446958",
featured:true,
aspectRatio: "wide",
gridSpan:"wide"
},

{
title:"Dropbox | Creativity",
director:"Morgan Harary",
thumbnail:"/projects/dropbox/dropbox_thumbnail.jpg",
hoverVideo:"/projects/dropbox/dropbox_loop.mp4",
vimeo:"https://player.vimeo.com/video/507201464",
featured:false,
aspectRatio: "wide",
gridSpan:"medium",
},

{
title:"Google | Business As Usual",
director:"Joshua Kissi",
thumbnail:"/projects/bau/bau_thumbnail.jpg",
hoverVideo:"/projects/bau/bau_Loop.mp4",
vimeo:"https://player.vimeo.com/video/514424882",
featured:false,
aspectRatio: "wide",
gridSpan:"medium",
},

{
title:"Hermès | Women's Fall-Winter",
director:"Drew Vickers",
thumbnail:"/projects/hermes/hermes24_thumbnail.jpg",
hoverVideo:"/projects/hermes/hermes24_loop.mp4",
vimeo:"https://player.vimeo.com/video/1111009610",
featured:false,
aspectRatio: "wide",
gridSpan:"medium",
},

{
title:"Jacquemus x Nike | Moonshoe",
director:"Oliver Hadlee Pearch",
thumbnail:"/projects/jacXnike/jacXnike_thumbnail.jpg",
hoverVideo:"/projects/jacXnike/jacXnike_loop.mp4",
vimeo:"https://player.vimeo.com/video/1194453479",
featured:false,
aspectRatio: "classic",
gridSpan:"wide",
},

{
title:"Vogue X Swarovski | Back To Life",
director:"Christine Yuan",
thumbnail:"/projects/swarovski/swarovski_thumbnail.jpg",
hoverVideo:"/projects/swarovski/swarovski_loop.mp4",
vimeo:"https://player.vimeo.com/video/670238682",
featured:false,
aspectRatio: "classic",
gridSpan:"wide",
},

{
title:"Meta | Future of Fitness",
director:"Nico Casavecchia",
thumbnail:"/projects/meta/meta_thumbnail.jpg",
hoverVideo:"/projects/meta/meta_loop.mp4",
vimeo:"https://player.vimeo.com/video/670244907",
featured:false,
aspectRatio: "wide",
gridSpan:"medium",
},

{
title:"NBA | This Is Happening",
director:"Jonathan Notaro",
thumbnail:"/projects/NBA/nba_thumbnail.jpg",
hoverVideo:"/projects/NBA/nba_loop.mp4",
vimeo:"https://player.vimeo.com/video/802766121",
featured:false,
aspectRatio: "wide",
gridSpan:"medium",
},

{
title:"Max Mara | Values",
director:"Oliver Hadlee Pearch",
thumbnail:"/projects/MaxMara/maxmara_thumbnail.jpg",
hoverVideo:"/projects/MaxMara/maxmara_loop.mp4",
vimeo:"https://player.vimeo.com/video/1111007551",
featured:false,
aspectRatio: "wide",
gridSpan:"medium",
},


{
title:"Jimmy Choo | Road To Joy",
director:"Oliver Hadlee Pearch",
thumbnail:"/projects/JimmyChoo/jimmy choo_thumbnail.jpg",
hoverVideo:"/projects/JimmyChoo/jimmy choo_loop.mp4",
vimeo:"https://player.vimeo.com/video/1111008771",
featured:false,
aspectRatio: "classic",
gridSpan:"wide",
},

{
title:"Zara Man",
director:"Philipp Paulus",
thumbnail:"/projects/Zara/zara_thumbnail.jpg",
hoverVideo:"/projects/Zara/zara_loop.mp4",
vimeo:"https://player.vimeo.com/video/1111000159",
featured:false,
aspectRatio: "classic",
gridSpan:"wide",
},

{
title:"Volvo | The Family Car - An American Love Story",
director:"Chris Wilcha",
thumbnail:"/projects/Volvo/volvo_thumbnail.jpg",
hoverVideo:"/projects/Volvo/volvo_loop.mp4",
vimeo:"https://player.vimeo.com/video/1194450621",
featured:false,
aspectRatio: "wide",
gridSpan:"wide",
},

{
title:"Pure Leaf | The Uphill",
director:"Amber Grace Johnson",
thumbnail:"/projects/Pure Leaf/pure leaf_thumbnail.jpg",
hoverVideo:"/projects/Pure Leaf/pure leaf_loop.mp4",
vimeo:"https://player.vimeo.com/video/1194449302",
featured:false,
aspectRatio: "wide",
gridSpan:"wide",
},

{
title:"Old Dominion | Best in the Game",
director:"Jeff Gonick",
thumbnail:"/projects/od/od_thumbnail.jpg",
hoverVideo:"/projects/od/od_loop.mp4",
vimeo:"https://player.vimeo.com/video/1195656401",
featured:false,
aspectRatio: "wide",
gridSpan:"medium",
},

{
title:"Instagram | Rallying Cry",
director:"Morgan Harary",
thumbnail:"/projects/instagram/instagram_thumbnail.jpg",
hoverVideo:"/projects/instagram/instagram_loop.mp4",
vimeo:"https://player.vimeo.com/video/507201447",
featured:false,
aspectRatio: "wide",
gridSpan:"medium",
},

{
title:"NFL | Whose Back You Got",
director:"The Hudson Dusters",
thumbnail:"/projects/NFL/nfl_thumbnail.jpg",
hoverVideo:"/projects/NFL/nfl_loop.mp4",
vimeo:"https://player.vimeo.com/video/670246641",
featured:false,
aspectRatio: "wide",
gridSpan:"medium",
},

] as const;

export default function ProjectGrid() {

return (

<section
  id="work"
  className="
    bg-black
    px-8
    md:px-16
    py-32
  "
>

<div
  className="
    max-w-[1600px]
    mx-auto
    grid
    grid-cols-1
    md:grid-cols-6
    gap-x-4
    gap-y-3
    auto-rows-auto
  "
>

{projects.map((project) => (
  <ProjectCard
    key={project.title}
    title={project.title}
    director={project.director}
    thumbnail={project.thumbnail}
    hoverVideo={project.hoverVideo}
    vimeo={project.vimeo}
    featured={project.featured}
    aspectRatio={project.aspectRatio}
    gridSpan={project.gridSpan}
  />
))}

</div>

</section>

);

}