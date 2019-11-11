<template>
    <main class="hero-container">
        <h1>
            Hello, I'm <span class="name">Ben Crane</span>.<br/>
            I build <div class="sliding-vertical">
                <span>websites.</span>
                <span>web apps.</span>
                <span>mobile apps.</span>
                <span>furniture.</span>
            </div>
        </h1>
        <div class="button-container">
            <a href="/blog/"><button>Blog</button></a>
            <a href="/projects/"><button>Projects</button></a>
            <a href="/contact/"><button>Contact</button></a>
        </div>
    </main>
</template>

<style lang=stylus scoped>
.hero-container {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.button-container a button {
    background: rgba(0, 0, 0, 0);
    border: 2px solid $greenColor;
    padding: 0.25em;
    margin: 0.5em;
    font-weight: bold;
    font-size: 1.5em;
    color: $greenColor;
}
.button-container a button:hover {
    background: $greenColor;
    color: white;
}
.name {
    color: $orangeColor;
}
.sliding-vertical {
    color: $greenColor;
    display: inline;
    text-indent: 0.3em;
}
.sliding-vertical span {
  animation: topToBottom 16s linear infinite 0s;
  -ms-animation: topToBottom 16s linear infinite 0s;
  -webkit-animation: topToBottom 16s linear infinite 0s;
  opacity: 0;
  overflow: hidden;
  position: absolute;
}
.sliding-vertical span:nth-child(2) {
  animation-delay: 4s;
  -ms-animation-delay: 4s;
  -webkit-animation-delay: 4s;
}
.sliding-vertical span:nth-child(3) {
  animation-delay: 8s;
  -ms-animation-delay: 8s;
  -webkit-animation-delay: 8s;
}
.sliding-vertical span:nth-child(4) {
  animation-delay: 12s;
  -ms-animation-delay: 12s;
  -webkit-animation-delay: 12s;
}
/* topToBottom aniation */
@-moz-keyframes topToBottom{
	0% { opacity: 0; }
	5% { opacity: 0; -moz-transform: translateY(-20px); }
	10% { opacity: 1; -moz-transform: translateY(0px); }
	25% { opacity: 1; -moz-transform: translateY(0px); }
	30% { opacity: 0; -moz-transform: translateY(20px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-webkit-keyframes topToBottom{
	0% { opacity: 0; }
	5% { opacity: 0; -webkit-transform: translateY(-20px); }
	10% { opacity: 1; -webkit-transform: translateY(0px); }
	25% { opacity: 1; -webkit-transform: translateY(0px); }
	30% { opacity: 0; -webkit-transform: translateY(20px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-ms-keyframes topToBottom{
	0% { opacity: 0; }
	5% { opacity: 0; -ms-transform: translateY(-20px); }
	10% { opacity: 1; -ms-transform: translateY(0px); }
	25% { opacity: 1; -ms-transform: translateY(0px); }
	30% { opacity: 0; -ms-transform: translateY(20px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@keyframes topToBottom{
	0% { opacity: 0; }
	5% { opacity: 0; transform: translateY(-20px); }
	10% { opacity: 1; transform: translateY(0px); }
	25% { opacity: 1; transform: translateY(0px); }
	30% { opacity: 0; transform: translateY(20px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
</style>