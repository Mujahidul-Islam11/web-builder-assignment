import Cards from "./Cards";
import RelatedCards from "./RelatedCards";
import SignUp from "./SignUp";
import TopperSection from "./TopperSection";


const Home = () => {
    return (
        <div className="container mx-auto md:w-[1124px]">
            <TopperSection></TopperSection>
            <Cards></Cards>
            <RelatedCards></RelatedCards>
            <SignUp></SignUp>
        </div>
    );
};

export default Home;