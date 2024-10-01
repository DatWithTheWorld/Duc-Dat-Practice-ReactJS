import { footerItems } from "../constants/constants";
import { footerItem } from "../interfaces/footerItems";

const Footer = () => {
    return (
        <footer className="flex justify-between text-0.75rem text-footerTextColor">
            <span>
                @ 2021, Made with ❤️ by <b className="text-highlightTextFooter">Creative Tim</b> &#38; <b className="text-highlightTextFooter">Simmmple</b>  for a better web
            </span>
            <ul className="flex w-[35%] justify-between">
                {
                    footerItems.map((item: footerItem)=>(
                        <li key={item.id}>
                            <a href="" target="_blank" rel="noopener noreferrer"> {item.title}</a>
                        </li>
                    ))
                }
            </ul>
        </footer>
    )
}

export default Footer;
