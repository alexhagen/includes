<script type="text/x-mathjax-config">
MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
  MathJax.Hub.Insert(MathJax.InputJax.TeX.Definitions.macros,{
    cancel: ["Extension","cancel"],
    bcancel: ["Extension","cancel"],
    xcancel: ["Extension","cancel"],
    cancelto: ["Extension","cancel"]
  });
});
MathJax.Hub.Config({
  tex2jax: {
    displayMath: [ ['$$', '$$'], ['\\[', '\\]'] ],
    inlineMath: [ ['$','$'], ['\\(','\\)'] ],
    processEscapes: true,
  },
  "HTML-CSS": {
    scale: 200,
    linebreaks: {
      automatic: true,
      width: "100% container",
    }
  },
  SVG: {
    scale: 200,
    linebreaks: {
      automatic: true,
      width: "100% container",
    }
  },
  TeX: {
    equationNumbers: {
      autoNumber: "all"
    },
  },
    showMathMenu: false
});

</script>

<script type="text/javascript"
     src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
