import {useContext} from 'react'
import MessageContext from '../MessageContext'
  
const Title = (props) => {
  const data = useContext(MessageContext)


  return (
    <div className="p-2 m-2 border-4 border-violet-400 text-violet-600">
      <div>Title</div>
      <div className="text-3xl text-center text-black">{data}</div>
    </div>
  );
};

export default Title;
