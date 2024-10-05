
import React, { useEffect } from 'react';
import './Asset.css'; 
// import backgroundVideo from './asset_bg.mp4';
import AssetItem from './AssetItem';
// import bgImage from './asthetic.jpg';


const assetData = [
  {
        id: 1,
        image: require('./room.jpeg'),
        description: 'Imagine a house where the roof shingles are as well-behaved as a perfectly groomed poodle, and the windows are so spotless that even the neighborhood birds come by just to admire their reflections. The front door, with its suave wooden finish and brass handle, practically says, "Come in, we’ve got cookies!" And let’s not forget the garage, which is so spacious and inviting, even your car will want to stay in and binge-watch a season of its favorite show. It\'s the perfect blend of cozy charm and modern elegance—no wonder the pixels never want to leave!'
      },
    
      {
        id: 2,
        image: require('./donut.jpeg'),
        description: 'Imagine a house where the roof shingles are as well-behaved as a perfectly groomed poodle, and the windows are so spotless that even the neighborhood birds come by just to admire their reflections. The front door, with its suave wooden finish and brass handle, practically says, "Come in, we’ve got cookies!" And let’s not forget the garage, which is so spacious and inviting, even your car will want to stay in and binge-watch a season of its favorite show. It\'s the perfect blend of cozy charm and modern elegance—no wonder the pixels never want to leave!'
      },
    
      {
        id: 3,
        image: require('./asset.jpeg'),
        description: 'Imagine a house where the roof shingles are as well-behaved as a perfectly groomed poodle, and the windows are so spotless that even the neighborhood birds come by just to admire their reflections. The front door, with its suave wooden finish and brass handle, practically says, "Come in, we’ve got cookies!" And let’s not forget the garage, which is so spacious and inviting, even your car will want to stay in and binge-watch a season of its favorite show. It\'s the perfect blend of cozy charm and modern elegance—no wonder the pixels never want to leave!'
      },
    
      {
        id: 4,
        image: require('./art.jpeg'),
        description: 'Imagine a house where the roof shingles are as well-behaved as a perfectly groomed poodle, and the windows are so spotless that even the neighborhood birds come by just to admire their reflections. The front door, with its suave wooden finish and brass handle, practically says, "Come in, we’ve got cookies!" And let’s not forget the garage, which is so spacious and inviting, even your car will want to stay in and binge-watch a season of its favorite show. It\'s the perfect blend of cozy charm and modern elegance—no wonder the pixels never want to leave!'
      },
    {
    id: 5,
    image: require('./parrot.jpeg'),
    description: 'Imagine a house where the roof shingles are as well-behaved as a perfectly groomed poodle, and the windows are so spotless that even the neighborhood birds come by just to admire their reflections. The front door, with its suave wooden finish and brass handle, practically says, "Come in, we’ve got cookies!" And let’s not forget the garage, which is so spacious and inviting, even your car will want to stay in and binge-watch a season of its favorite show. It\'s the perfect blend of cozy charm and modern elegance—no wonder the pixels never want to leave!'
  },

  {
    id: 6,
    image: require('./rock.jpeg'),
    description: 'Imagine a house where the roof shingles are as well-behaved as a perfectly groomed poodle, and the windows are so spotless that even the neighborhood birds come by just to admire their reflections. The front door, with its suave wooden finish and brass handle, practically says, "Come in, we’ve got cookies!" And let’s not forget the garage, which is so spacious and inviting, even your car will want to stay in and binge-watch a season of its favorite show. It\'s the perfect blend of cozy charm and modern elegance—no wonder the pixels never want to leave!'
  },

  {
    id: 7,
    image: require('./duck.jpeg'),
    description: 'Imagine a house where the roof shingles are as well-behaved as a perfectly groomed poodle, and the windows are so spotless that even the neighborhood birds come by just to admire their reflections. The front door, with its suave wooden finish and brass handle, practically says, "Come in, we’ve got cookies!" And let’s not forget the garage, which is so spacious and inviting, even your car will want to stay in and binge-watch a season of its favorite show. It\'s the perfect blend of cozy charm and modern elegance—no wonder the pixels never want to leave!'
  },
  
];

const Asset = () => {
  useEffect(() => {
    const handleScroll = () => {
      const assets = document.querySelectorAll('.asset');
      assets.forEach(asset => {
        const assetPosition = asset.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.4;

        if (assetPosition < screenPosition) {
          asset.classList.add('animate-up');
          asset.classList.remove('animate-down');
        } else {
          asset.classList.remove('animate-up');
          asset.classList.add('animate-down');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="asset-wrapper">
      {/* <video autoPlay muted loop className="video-background">
        <source src={backgroundVideo} type="video/mp4" />
      </video> */}
      {/* <img src={bgImage} alt="Background" className="background" /> */}
      <div className="overlay">
        <h2>Top Assets</h2>
        <div className="asset-container">
          {assetData.map((asset, index) => (
            <AssetItem
              key={asset.id}
              image={asset.image}
              description={asset.description}
              className="asset-item animate-down"
              direction={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Asset;



