import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

//Animations are just the jorney from one state to the next

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState',[
      state('normal', style({
        'background-color': 'red', transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue', transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
        // transition('highlighted => normal', animate(1000))
    ]),

    trigger('wildState',[
      state('normal', style({
        'background-color': 'red', transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue', transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor: 'green', transform: 'translateX(0px) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(100)),
      // transition('shrunken <=> *', animate(500, style({borderRadius: '50px'}))),
      transition('shrunken <=> *', [
        style({'background-color': 'orange'}),
        animate(1000)
      ]),
    ]),

    trigger('list1',[
      state('in', style({
       opacity:1, transform: 'translateX(0)'
      })),

      transition('void => *', [
        style({
        opacity:0, transform: 'translateX(-100px)'
        }),
        animate(300)]),

      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0,
        }))]),
    ]),





    trigger('list2',[
      state('in', style({
       opacity:1, transform: 'translateX(0)'
      })),

      transition('void => *',
      [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)', opacity: 0, offset:0
          }),
          style({
            transform: 'translateX(-50px)', opacity: 0.5, offset:0.3
          }),
          style({
            transform: 'translateX(-20px)', opacity: 1, offset:0.8
          }),
              style({
            transform: 'translateX(-20px)', opacity: 1, offset:1
          })
        ]))
      ]
      ),

      transition('* => void', [
        group([
        animate(300, style({
         color: 'red'
        })),
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0,
        }))
      ])]),
    ]),
  ]
})
export class AppComponent {
	list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';
  wildState=  'normal'

	onAdd(item) {
		this.list.push(item);
	}

	onDelete(item) {
		this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate(){
    this.state == 'normal'?this.state='highlighted':this.state='normal';
      this.wildState == 'normal'?this.wildState='highlighted':this.wildState='normal';
  }


  onShrink(){
  this.wildState = 'shrunken'
  }


  animationStarted(event){
    console.log(event)
  }

  animationEnded(event){
    console.log(event)
  }
}
