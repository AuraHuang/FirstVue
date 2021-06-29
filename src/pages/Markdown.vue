<template>
  <div class="markdown_content">
      <h1 class="title">Markdown</h1>
      <div class="content_section">
        <textarea class="content_item" placeholder="input something..." v-model="inputText"></textarea>
        <article class="content_item right" :style="inputCallback()">{{ inputText }}</article>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            inputText: "",
        }
    },
    methods: {
        inputCallback() {
            if ((this.inputText.lastIndexOf("*") == this.inputText.length-1)) {
                return "font-weight: bold;"
            } else {
                return this.inputText
            }
        }
    }
}
</script>

<style>
    .markdown_content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px !important;
        height: calc(100vh - 50px);
    }
    .content_section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 350px;
        margin: 10px 0px !important;
    }
    textarea {
        outline: none;
    }
    .content_item{
        font-size: 12pt;
        border: 2px solid rgb(34, 34, 34);
        border-radius: 5px;
        padding: 10px;
        margin: 5px !important;
        height: 100% !important;
        width: 30% !important;
    }
    .right {
        border: none;
        background-color: rgb(235, 235, 235);
    }
</style>