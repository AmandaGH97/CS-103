import useSWR from "swr";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1%;
`;

const StyledHeading = styled.h1`
  font-variant: all-small-caps;
  color: cornflowerblue;
`;

const StyledImage = styled.img`
  border: #747bff solid 5px;
`;

function App() {
    const { data, error } = useSWR(
        "https://rickandmortyapi.com/api/character",
        (url) => fetch(url).then((res) => res.json())
    );

    if (error) return <p>{error.message}</p>;
    if (!data) return <p>Loading...</p>;

    return (
        <StyledDiv>
            {data.results.map((char) => (
                <StyledCard key={char.id}>
                    <StyledHeading>{char.name}</StyledHeading>
                    <StyledImage src={char.image} alt={char.name} />
                </StyledCard>
            ))}
        </StyledDiv>
    );
}

export default App;
