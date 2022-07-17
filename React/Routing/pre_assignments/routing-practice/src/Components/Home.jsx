import { useParams } from 'react-router-dom';

const Home = (props) => {
  const {input, background, color, text} = useParams();
  return (
    <div>
      {
        (!input)?
        <h1>Welcome</h1>: (!isNaN(input))?<h1> The number is: {input}</h1>:
        (color || background)?<h1 style={{color: color, backgroundColor: background}}>The Word is: {input}</h1>: <h1> The word: {input}</h1>

      }
    </div>
  );
};

export default Home;