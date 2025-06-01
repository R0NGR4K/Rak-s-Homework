import './App.css'
import Button from '../components/Button.tsx'

const ComponentProps = () => {
  return (

    <div>
      <Button isDark={true} num={10} color="red" border="rounded">
        Love button
      </Button>
      <Button color="blue" border='rounded-full'>
        Hate button
      </Button>
    </div>
    
  );
}


export default ComponentProps