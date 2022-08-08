import './ExploreContainer.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Ready to accept crypto?</strong>
      <p>
        Start with CashBTN{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          Crypto UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
