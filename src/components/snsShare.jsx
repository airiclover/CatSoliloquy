import {
  TwitterShareButton,
  FacebookShareButton,
  TwitterIcon,
  FacebookIcon,
} from "react-share";

export function SnsShare(props) {
  const { url, title } = props;

  return (
    <div className="text-center">
      <ul className="flex justify-end sm:mr-4">
        <li className="px-2 sm:hover:opacity-75">
          <TwitterShareButton
            url={`https://cat-soliloquy.vercel.app/blog/${url}`}
            title={title}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </li>
        <li className="px-2 sm:hover:opacity-75">
          <FacebookShareButton
            url={`https://cat-soliloquy.vercel.app/blog/${url}`}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </li>
      </ul>
    </div>
  );
}
