import theme from "../styles/theme";

interface Button {
  label: string;
  onClick: () => void;
}

const pageWidth = "600px";
const contentMinHeight = "300px";
const buttonsHeight = "4em";
const floatButtonsAt = "800px";

/**
 * Wrapper around every page: contains a body and a list of buttons
 */
const Page = ({
  children,
  buttons,
}: {
  children: React.ReactNode;
  buttons: Button[];
}) => (
  <div className="page">
    <div className="content">{children}</div>
    <div className="buttons">
      <div className='fade'></div>
      {buttons.map(({ label, onClick }, idx) => (
        <button key={idx} onClick={onClick}>
          {label}
        </button>
      ))}
    </div>

    <style jsx>{`
      .page {
        width: ${pageWidth};
        max-width: 100%;
      }

      .content {
        padding: 1em;
        min-height: ${contentMinHeight};
        box-sizing: border-box;

        max-height: calc(100vh - ${buttonsHeight});
        margin-bottom: ${buttonsHeight};
        
        /* TODO: some visual indicator that the element is scrollable */
        overflow-y: scroll;
      }

      /* Gradient (visible only when content overflows) gives a visual indicator that content is scrollable. */
      .buttons .fade {
        position: absolute;

        left: 0;
        right: 0;
        top: -30px;
        height: 30px;
        margin-bottom: -30px;
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1) 60%);
      }

      .buttons {
        width: ${pageWidth};
        max-width: 100%;
        display: flex;
        align-items: center;
        padding: 0 1em;

        position: fixed;
        bottom: 0;
        height: ${buttonsHeight};
      }

      /* only put buttons at the bottom of the screen on small screens, otherwise they're too far from the content */
      @media (min-height: ${floatButtonsAt}) {
        .content {
          padding-bottom: 0;
        }

        .buttons {
          position: relative;
        }
      }

      button {
        margin-right: 1em;
        color: black;
        background-color: ${theme.colors.accent};
        border: none;
        padding: 0.5em 0.8em;
        font-family: inherit;
        font-size: inherit;
        border-radius: 0.1em;
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;
      }

      button:hover {
        background-color: ${theme.colors.hoverAccent};
      }
    `}</style>
  </div>
);

export default Page;
