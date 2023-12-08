import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Seccion de comentarios</h3>

    <img src="https://tse1.mm.bing.net/th/id/OIP.CLHbFkXJXv1h5kY5SQ0odwHaEj?rs=1&pid=ImgDetMain" alt="this is fine meme">

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptatem dolor sapiente, distinctio magni perspiciatis, fugiat numquam quas perferendis quisquam laborum sed officiis eaque iusto nostrum non velit ut laboriosam.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eaque veniam est dolore? Tempora repellat quidem ex autem quas, architecto cupiditate hic earum, voluptatibus quo distinctio impedit, odit corporis ab.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa adipisci tenetur voluptatibus quisquam, nobis cum quo, quidem, doloribus porro quos? Dolorum quidem placeat ex quia repudiandae vitae explicabo eos!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores adipisci, illo voluptates repellendus ipsa id consequatur labore quaerat, consequuntur a rem delectus natus et quas molestiae sapiente quibusdam cumque placeat?
    </p>
  `,
  styles: `
  img {
    width: 100%;
  }
  `
})
export class CommentsComponent {

}
