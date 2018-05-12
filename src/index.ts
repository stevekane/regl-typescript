import * as Regl from "regl"

const RED = [ 1, 0, 0, 1 ]
const regl = Regl()

function update() {
  regl.clear({ color: RED })
}

regl.frame(update)
