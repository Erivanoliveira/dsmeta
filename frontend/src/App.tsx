import Header from "./components/Header";
import Salescard from "./components/Salescard";

function app() {
    return (
        <>
            <Header />
            <main>
                <section id="sales">
                    <div className="dsmeta-container">
                        <Salescard />
                    </div>
                </section>
            </main>
        </>
    )
}
export default app;