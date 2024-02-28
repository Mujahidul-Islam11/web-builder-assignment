import Cards from "./Cards";
import TopperSection from "./TopperSection";


const Home = () => {
    return (
        <div className="container mx-auto md:w-[1124px]">
            <TopperSection></TopperSection>
            <Cards></Cards>
        </div>
    );
};

export default Home;