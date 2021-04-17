import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const socialLink = [
    {
        red: <LinkedInIcon />,
        link: 'https://www.linkedin.com/in/diego-libreros-b69828159/'
    },
    {
        red: <GitHubIcon />,
        link: 'https://www.github.com/diegofly91'
    },
    {
        red: <MailIcon />,
        link: 'mailto:diegofernandolibreros@gmail.com'
    }
]
const LinkRedes = () => {
    return (<>
                {socialLink.map((item)=>(<IconButton 
                                            justIcon 
                                            link 
                                            href={item.link}
                                        >
                                            {item.red}
                                        </IconButton>)
                               )
                }
            </>);
}

export default LinkRedes;