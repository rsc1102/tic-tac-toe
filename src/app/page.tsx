import Grid from "./UI/grid/grid";

export default function Home() {

  return (
    <div className="flex h-screen flex-col justify-center">
      <h1 className="text-center font-extrabold text-8xl mb-10">Tic-Tac-Toe</h1>
      <Grid />
    </div>    
  );
}
