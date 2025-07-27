import PageContainer from "../assets/wrappers/PageContainer";
import Section from "../assets/wrappers/Section";
import Title from "../assets/wrappers/Title";
import Subtitle from "../assets/wrappers/Subtitle";
import Text from "../assets/wrappers/Text";
import { useNavigate } from "react-router-dom";

const Refractometer = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "5px 15px",
          border: "none",
          borderRadius: "7px",
          backgroundColor: "#2a383f",
          marginRight: "auto",
          color: "#bab2a7",
        }}
      >
        Back to Home
      </button>
      <Title>MovieFlix</Title>

      <Section style={{ justifyContent: "space-between" }}>
        <Subtitle>Introduction</Subtitle>
        <Text>
          MovieFlix is a mobile app built with React Native that lets users
          browse, search, and save movies. Users can create an account, upload a
          profile picture, and explore trending movies based on search
          popularity.
        </Text>
        <Subtitle>Features:</Subtitle>
        <ul>
          <li>Search movies using the free IMDb API</li>
          <li>User registration and login (via Appwrite)</li>
          <li>Upload and delete profile pictures</li>
          <li>Save favorite movies (user-specific)</li>
          <li>Trending movies based on most searched titles</li>
          <li>
            Movie details: poster, description, actors, directors/writers, and
            title
          </li>
          <li>Built with Expo for easy development and quick testing</li>
        </ul>
        <Subtitle>Tech Stack:</Subtitle>
        <ul>
          <li>
            <strong>Frontend:</strong> React Native + Expo
          </li>
          <li>
            <strong>Backend:</strong> Appwrite (Authentication, Database,
            Storage)
          </li>
          <li>
            <strong>Styling:</strong> Tailwind CSS (via NativeWind)
          </li>
          <li>
            <strong>Dev Tools:</strong> Docker (for Appwrite), Git
          </li>
        </ul>
      </Section>

      <Section>
        <Subtitle>Demo</Subtitle>

        <iframe
          style={{ borderRadius: "12px" }}
          width="70%"
          height="100%"
          src="https://www.youtube.com/embed/Fpv8hTqEdJI"
          title="YouTube Shorts Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Section>
    </PageContainer>
  );
};

export default Refractometer;
