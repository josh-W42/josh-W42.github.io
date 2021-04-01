import Fade from 'react-bootstrap/Fade'

const Home = () => {

  const [open, setOpen] = useState()

  return (
    <div className="bg-light">
      <Fade in={true}>
        <div  id="example-fade-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Fade>
    </div>
  )
}

export default Home