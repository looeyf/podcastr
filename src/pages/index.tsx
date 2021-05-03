// SPA - Single Page Application
// Utiliza hooks (useEffect) para realizar o get na API e reroda cada vez que um dado mudar, isso no client side
// import { useEffect } from "react";

// chamada SPA
// export default function Home() {
//   useEffect(() => {
//     fetch('http://localhost:3333/episodes')
//       .then(response => response.json())
//     }, [])
  
//   return (
//     <h1>index</h1>
//   )
// }


// chamada SSR ou SSG
export default function Home(props) {
  return (
    <>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </>
  )
}

//SSR - Server Side Rendering
// Faz o get na API todas as vezes que alguém logar no app
// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes');
//   const data = await response.json();

//   return {
//     props: {
//       episodes: data,
//     },
//   }
// }

//SSG - Static Site Generation
// Cria uma página estática (um cache) do website, para que todos que fizeram a chamada na url, recebam o mesmo conteúdo
// sem precisar requisitar novamente para o servidor
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
