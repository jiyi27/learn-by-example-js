import RouteTree from "@/app/_components/RouteTree";
import routes from "@/app/_components/routes";


export default function Page() {
    return (
        <main className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Learn React.js by Examples</h1>
            <RouteTree routes={routes} />
        </main>
    );
}