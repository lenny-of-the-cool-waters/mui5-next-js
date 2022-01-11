import Container from "@mui/material/Container";
import Hero from "@components/Hero";
import SectionAbout from "@components/SectionAbout";
import SectionImage from "@components/SectionImage";
import SectionReview from "@components/SectionReview";


const Homepage = () => {
  return (
    <>
      <Hero
        imgSrc="/home-hero.jpg"
        imgAlt="satified woman eating in restaurant"
        title="De West Sakura"
        subtitle="Best Western &amp; Japanese Fusion Restaurant In Town"
      />

      <SectionAbout />
      <SectionImage imgSrc="/fusion-food.jpg" imgAlt="fusion food" />
      <SectionReview />

      {/* <Container maxWidth="sm">
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sit
          doloribus commodi recusandae sint quos facere. Error aperiam obcaecati
          perspiciatis ex nostrum? Omnis repudiandae enim suscipit cum dolor
          asperiores harum! Quas voluptatem, optio esse corporis, veniam atque,
          earum laborum eos quibusdam illo doloremque numquam officia minus
          dolorem incidunt. Repellat assumenda deleniti recusandae maiores
          maxime molestiae aliquam reiciendis, doloribus aliquid dignissimos.
          Quisquam mollitia saepe vel quae dolore rem, pariatur deserunt, nihil
          sint sunt commodi dolores ab iste. Earum omnis reiciendis amet iste
          dicta blanditiis ipsum laudantium alias cumque, non impedit minus. Non
          et quam esse ipsa aut, consequuntur quasi dicta consequatur
          necessitatibus exercitationem optio animi? Enim, fugit dolorum
          accusantium sunt ea quis doloremque maxime veritatis laborum quod
          praesentium accusamus velit iure. Voluptatem sed nam vero incidunt
          autem veritatis eum adipisci illum nihil cumque consequuntur,
          voluptatum soluta sunt ipsum ducimus beatae nulla architecto, quae
          libero impedit. Dolorem dolore reprehenderit amet expedita quasi.
          Officiis aliquam eaque impedit tenetur fugit nihil sit voluptates
          ducimus at omnis labore suscipit, dicta, quaerat harum odit possimus
          consequuntur quasi? Dolore quia nobis atque ex temporibus debitis
          nulla mollitia. Praesentium mollitia delectus vitae voluptates eum
          nostrum consequuntur minus, corporis numquam laudantium fuga nesciunt
          cumque sint vel ratione facere quasi enim dolor, inventore ullam!
          Impedit est amet voluptatem veniam eos? Voluptatum fugiat doloremque
          inventore aliquid ratione voluptates quia? Beatae tempora veniam
          exercitationem dolorem impedit magnam deleniti provident, minus
          necessitatibus? Nam pariatur corrupti soluta temporibus aspernatur
          incidunt dignissimos quam iusto placeat? Rerum id obcaecati ut a
          deleniti eligendi non odio odit animi molestias harum, explicabo ab
          laborum est ipsa quod aperiam dolor culpa. Ratione, amet quam labore
          doloribus incidunt nam obcaecati? Aliquid natus iure exercitationem
          optio molestias repudiandae eaque fugit sapiente sequi voluptatum,
          eius laudantium? Delectus quidem autem voluptate, ipsum dolor fuga
          ducimus voluptatem, deleniti aspernatur doloribus dolorum iusto
          incidunt. Nemo! Quo in consectetur architecto, vitae facilis quasi
          similique commodi accusantium debitis ex molestiae aliquam porro
          accusamus error! Natus porro cum eveniet distinctio magni. Eos minus
          neque eaque, veritatis officia voluptate? Pariatur ipsum id quibusdam
          eius optio explicabo maxime minus recusandae sit voluptates? Aliquam,
          voluptates provident ut eius asperiores accusantium sit, iste,
          voluptatum neque perspiciatis vitae. Nesciunt ab delectus temporibus
          magnam! Magnam sapiente cupiditate distinctio sint, vero corrupti
          dolor consequuntur et eius voluptatum mollitia magni necessitatibus ex
          repellat ad debitis, voluptas maiores nam. Et, debitis? Repellat
          corporis amet laborum a ullam. Blanditiis labore id, voluptates quasi
          esse doloribus mollitia aliquam repellat dolorum sit asperiores ipsum
          assumenda, beatae aspernatur, veritatis ab sint ratione. Praesentium
          veritatis dicta animi saepe aut doloremque, quibusdam quam. Nam
          asperiores non, quae corrupti minima illum accusamus iusto aperiam
          amet ullam corporis nesciunt, harum eos temporibus quia vel in?
          Incidunt possimus optio officiis molestiae a magnam veritatis. A,
          tempora.
        </p>
      </Container> */}
    </>
  );
};

export default Homepage;
