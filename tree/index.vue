<template>
    <div class="b_tree" @scroll="handleScroll">
        <div class="b-tree__phantom" :style="{ height: contentHeight }"></div>
        <div
            class="b-tree__content"
            :style="{ transform: `translateY(${offset}px`}"
        >
            <div
                v-for="(item, index) in visibileData"
                :key="item.id"
                class="b-tree__list-view"
                :style="{
                    paddingLeft: 18 * (item.level - 1) + 'px'
                }"
            >
                <i :class="item.expand ? 'b-tree__expand' : 'b-tree__close'"
                    v-if="item.children && item.children.length" />
                <slot :item="item" :index="index"></slot>
            
            </div>

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style>
.b-tree {
  position: relative;
  height: 500px;
  overflow-y: scroll;
}
.b-tree__phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}
.b-tree__content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  min-height: 100px;
}
.b-tree__list-view{
  display: flex;
  align-items: center;
  cursor: pointer;
}
.b-tree__content__item {
  padding: 5px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  cursor: pointer;
}
.b-tree__content__item:hover,
.b-tree__content__item__selected {
  background-color: #d7d7d7;
}
.b-tree__content__item__icon {
  position: absolute;
  left: 0;
  color: #c0c4cc;
  z-index: 10;
}
.b-tree__close{
    display:inline-block;
    width:0;
    height:0;
    overflow:hidden;
    font-size:0;
  margin-right: 5px;
    border-width:5px;
    border-color:transparent transparent transparent #C0C4CC;
    border-style:dashed dashed dashed solid
}
.b-tree__expand{
    display:inline-block;
    width:0;
    height:0;
    overflow:hidden;
    font-size:0;
  margin-right: 5px;
    border-width:5px;
    border-color:#C0C4CC transparent transparent transparent;
    border-style:solid dashed dashed dashed
}
</style>