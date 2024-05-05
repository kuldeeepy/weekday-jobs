import React, { useEffect } from "react";

function Filter() {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.offsetHeight
      )
        console.log("You have reached the end!");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <div>
      <h2>Top</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla
        quam omnis labore nisi? Eaque a beatae rem suscipit sit odio ratione
        nesciunt sint similique error veniam accusamus, veritatis saepe corrupti
        repudiandae? Velit sapiente veritatis molestiae sequi odit iste
        cupiditate. Aperiam recusandae magni fugit, quas consectetur illum
        aliquam tempora unde eligendi, ullam beatae iusto cumque itaque facilis
        in sed? Saepe doloremque quia illo distinctio assumenda deleniti, culpa
        obcaecati repellat at accusamus inventore tempore non! Consequatur
        explicabo exercitationem omnis eaque, quis in labore asperiores officiis
        eos fugiat expedita laboriosam deleniti accusantium fugit maxime
        assumenda dolorem ipsum soluta molestias fuga voluptas. Soluta dolor
        exercitationem culpa quo iure aperiam unde dignissimos fugiat totam
        alias eligendi non dolorem, inventore distinctio saepe, dolorum at
        recusandae doloremque, ipsa voluptas tempora. Eligendi exercitationem
        deleniti optio illo, a obcaecati. Nemo cupiditate officia quaerat
        itaque, est aspernatur officiis et unde neque illum hic repellendus eius
        sunt quia iusto repudiandae, explicabo asperiores assumenda modi
        molestias. Unde nobis tenetur repudiandae minima architecto ipsum iste
        quos consectetur quod eos, porro, hic, assumenda sit amet error
        reiciendis eius. Distinctio est omnis numquam repellat labore mollitia
        odio eum voluptate consectetur? Est quod adipisci officia asperiores
        quae maxime eos obcaecati sunt dolorum, dolores aliquam recusandae
        aperiam quia temporibus exercitationem quam blanditiis qui ipsam ex
        enim! Vero ratione distinctio obcaecati, voluptate impedit doloremque?
        Incidunt, inventore facilis impedit blanditiis ab saepe quos quas
        recusandae. Obcaecati non ab cum, mollitia fuga dicta cupiditate eos
        ratione omnis. Nesciunt sed, eos est deserunt corporis consequatur minus
        id sequi tempore quos deleniti eligendi ut quasi! Tenetur modi eaque
        repellendus? Amet nam voluptatum id impedit minus. Itaque saepe soluta
        illo fuga, quae perferendis recusandae rem accusamus iste ratione
        deserunt, suscipit minus. Optio numquam eius cupiditate temporibus
        corrupti quasi possimus, neque alias officia consectetur, porro odio
        expedita, illum nulla qui. Ut assumenda deserunt error consectetur minus
        fugiat cupiditate a harum eos eveniet voluptatum modi reiciendis facere
        veritatis dolores nihil totam, quibusdam aliquid quo vel debitis. Nisi
        at distinctio repellat in blanditiis nemo corporis hic quisquam
        voluptate repellendus eligendi, dolores doloribus, ab minima sed
        inventore? Mollitia asperiores est harum modi obcaecati debitis, eveniet
        ut vero explicabo dolorem soluta dolor architecto ab numquam officiis
        quod nobis reprehenderit saepe assumenda distinctio enim sed blanditiis?
        Doloremque tenetur sequi alias distinctio officia facilis non
        repudiandae voluptatum molestiae, soluta id ipsa error tempora. Vel iure
        saepe quae quod autem enim nihil quis atque nam officiis. Debitis
        eligendi, voluptatum vero numquam fuga repellat in iure atque ipsum
        necessitatibus, itaque aliquid aperiam odit dolores aliquam pariatur
        dicta, blanditiis tempora saepe explicabo nam. Maiores autem sit vero
        voluptatem? Quasi esse voluptatibus id veniam enim quaerat
        necessitatibus, voluptates minima atque hic, ratione corporis nostrum in
        nisi perferendis dignissimos a animi repellendus. Iure, beatae. Iusto
        tenetur, provident doloribus necessitatibus laborum ad sit eos tempora,
        praesentium, et cumque! Minus repellat aperiam iusto unde quod quo sed
        atque? Odit officia sit unde distinctio facilis, eius id nisi
        reprehenderit qui odio error blanditiis animi impedit quasi porro
        repellat sed excepturi quam dolor doloribus eum natus reiciendis enim.
      </p>
      <h2>Bottom</h2>
    </div>
  );
}

export default Filter;
