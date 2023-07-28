import home from '../image/home.jpg'

function Home() {

    return (
        <div className='home-main w-full flex h-full bg-cover bg-center' style={{backgroundImage: `url(${home})`}}>
            <div className="contain grow bg-white bg-opacity-10 p-40">
                <p className="text-green-300">Welcome to Taste Buds</p>
                <p>In this WebSite you can find the recipes to make your desired food.</p>
                <p>Or you can share the recipes you know!</p>
            </div>
        </div>
    );

};

export default Home;