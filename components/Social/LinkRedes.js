import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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