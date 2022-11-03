import{_ as n,c as l,b as e,w as o,a as p,d as s,e as t,r,o as c}from"./app.3b6e8018.js";const i="/yalantinglibs/assets/yalantinglibs_ding_talk_group.45aa219d.png",f=JSON.parse('{"title":"How to generate document","description":"","frontmatter":{},"headers":[{"level":2,"title":"coro_rpc","slug":"coro-rpc","link":"#coro-rpc","children":[{"level":3,"title":"quick example","slug":"quick-example","link":"#quick-example","children":[]}]},{"level":2,"title":"struct_pack","slug":"struct-pack","link":"#struct-pack","children":[{"level":3,"title":"quick example","slug":"quick-example-1","link":"#quick-example-1","children":[]}]},{"level":2,"title":"struct_json","slug":"struct-json","link":"#struct-json","children":[{"level":3,"title":"quick example","slug":"quick-example-2","link":"#quick-example-2","children":[]}]},{"level":2,"title":"async_simple","slug":"async-simple","link":"#async-simple","children":[]},{"level":2,"title":"Quick Start","slug":"quick-start","link":"#quick-start","children":[{"level":3,"title":"coro_rpc","slug":"coro-rpc-1","link":"#coro-rpc-1","children":[]},{"level":3,"title":"struct_pack","slug":"struct-pack-1","link":"#struct-pack-1","children":[]}]},{"level":2,"title":"Benchmark","slug":"benchmark","link":"#benchmark","children":[]},{"level":2,"title":"Build Options","slug":"build-options","link":"#build-options","children":[]},{"level":2,"title":"Dependencies","slug":"dependencies","link":"#dependencies","children":[{"level":3,"title":"coro_rpc","slug":"coro-rpc-2","link":"#coro-rpc-2","children":[]},{"level":3,"title":"struct_pack","slug":"struct-pack-2","link":"#struct-pack-2","children":[]},{"level":3,"title":"struct_json","slug":"struct-json-1","link":"#struct-json-1","children":[]},{"level":3,"title":"struct_pb","slug":"struct-pb","link":"#struct-pb","children":[]},{"level":3,"title":"easylog","slug":"easylog","link":"#easylog","children":[]}]}],"relativePath":"zh/guide/what-is-yalantinglibs.md","lastUpdated":null}'),y={name:"zh/guide/what-is-yalantinglibs.md"},d=p(`<p align="center"><h1 align="center">yaLanTingLibs</h1><h6 align="center">A Collection of C++20 libraries, include struct_pack, struct_json, coro_rpc and async_simple </h6></p><p align="center"><img alt="license" src="https://img.shields.io/github/license/alibaba/async_simple?style=flat-square"><img alt="language" src="https://img.shields.io/github/languages/top/alibaba/yalantinglibs?style=flat-square"><img alt="last commit" src="https://img.shields.io/github/last-commit/alibaba/async_simple?style=flat-square"></p><p>yaLanTingLibs is a collection of C++20 libraries, now it contains struct_pack, struct_json, coro_rpc and <a href="https://github.com/alibaba/async_simple" target="_blank" rel="noreferrer">async_simple</a>, more and more cool libraries will be added into yaLanTingLibs(such as http.) in the future.</p><p>The target of yaLanTingLibs: provide very easy and high performance C++20 libraries for C++ developers, it can help to quickly build high performance applications.</p><table><thead><tr><th>OS (Compiler Version)</th><th>Status</th></tr></thead><tbody><tr><td>Ubuntu 22.04 (clang 14.0.0)</td><td><img src="https://github.com/alibaba/yalantinglibs/actions/workflows/linux_clang.yml/badge.svg?branch=main" alt="win"></td></tr><tr><td>Ubuntu 22.04 (gcc 11.2.0)</td><td><img src="https://github.com/alibaba/yalantinglibs/actions/workflows/linux_gcc.yml/badge.svg?branch=main" alt="win"></td></tr><tr><td>macOS Monterey 12 (AppleClang 14.0.0.14000029)</td><td><img src="https://github.com/alibaba/yalantinglibs/actions/workflows/mac.yml/badge.svg?branch=main" alt="win"></td></tr><tr><td>Windows Server 2022 (MSVC 19.33.31630.0)</td><td><img src="https://github.com/alibaba/yalantinglibs/actions/workflows/windows.yml/badge.svg?branch=main" alt="win"></td></tr></tbody></table><h2 id="coro-rpc" tabindex="-1">coro_rpc <a class="header-anchor" href="#coro-rpc" aria-hidden="true">#</a></h2><p>Very easy-to-use, coroutine-based, high performance rpc framework with C++20, more than 2000w qps in echo scene. coro_rpc is a header only library.</p><p>You can finish a rpc server and rpc client in 5 minutes!</p><p><a href="https://alibaba.github.io/yalantinglibs/guide/coro-rpc-intro.html" target="_blank" rel="noreferrer">English Introduction</a> | <a href="https://alibaba.github.io/yalantinglibs/zh/guide/coro-rpc-intro.html" target="_blank" rel="noreferrer">\u4E2D\u6587\u7B80\u4ECB</a></p><p>English API(TODO) | <a href="https://alibaba.github.io/yalantinglibs/cn/html/group__coro__rpc.html" target="_blank" rel="noreferrer">\u4E2D\u6587API</a></p><p><a href="https://alibaba.github.io/yalantinglibs/coro_rpc_introduction_purecpp_talk.pdf" target="_blank" rel="noreferrer">Talk</a> of coro_rpc on purecpp conference.</p><p><a href="https://live.csdn.net/room/csdnlive1/bKFbKP7T" target="_blank" rel="noreferrer">Video</a> on purecpp conference, start from 04:55:08 of the video record.</p><h3 id="quick-example" tabindex="-1">quick example <a class="header-anchor" href="#quick-example" aria-hidden="true">#</a></h3><p>1.define a rpc function as a local normal function.</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// rpc_service.hpp</span></span>
<span class="line"><span style="color:#C792EA;">inline</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">string_view</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">echo</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">string_view</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>2.register rpc function and start a server</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rpc_service.hpp</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">coro_rpc/coro_rpc_server.hpp</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  coro_rpc_server </span><span style="color:#82AAFF;">server</span><span style="color:#89DDFF;">(</span><span style="color:#676E95;">/*thread_num =*/</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;"> /*port =*/</span><span style="color:#F78C6C;">9000</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  server</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">register_handler</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">echo</span><span style="color:#89DDFF;">&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">  server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>3.rpc client call rpc service</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rpc_service.hpp</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">coro_rpc/coro_rpc_client.hpp</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Lazy</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">void</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_client</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  coro_rpc_client client</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">co_await</span><span style="color:#A6ACCD;"> client</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;"> /*port =*/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">9000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">auto</span><span style="color:#A6ACCD;"> r </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">co_await</span><span style="color:#A6ACCD;"> client</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">call</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">echo</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello coro_rpc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;"> //\u4F20\u53C2\u6570\u8C03\u7528rpc\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">value</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;"> //will print &quot;hello coro_rpc&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">syncAwait</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">test_client</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>More examples <a href="https://github.com/alibaba/yalantinglibs/tree/main/src/coro_rpc/examples" target="_blank" rel="noreferrer">here</a>.</p><h2 id="struct-pack" tabindex="-1">struct_pack <a class="header-anchor" href="#struct-pack" aria-hidden="true">#</a></h2><p>Based on compile-time reflection, very easy to use, high performance serialization library, struct_pack is a header only library, it is used by coro_rpc now.</p><p>Only one line code to finish serialization and deserialization, 10-50x faster than protobuf.</p><p><a href="https://alibaba.github.io/yalantinglibs/guide/struct-pack-intro.html" target="_blank" rel="noreferrer">English Introduction</a> | <a href="https://alibaba.github.io/yalantinglibs/zh/guide/struct-pack-intro.html" target="_blank" rel="noreferrer">\u4E2D\u6587\u7B80\u4ECB</a></p><p>English API(TODO) | <a href="https://alibaba.github.io/yalantinglibs/cn/html/group__struct__pack.html" target="_blank" rel="noreferrer">\u4E2D\u6587API</a></p><p><a href="https://alibaba.github.io/yalantinglibs/A%20Faster%20Serialization%20Library%20Based%20on%20Compile-time%20Reflection%20and%20C++%2020.pdf" target="_blank" rel="noreferrer">(Slides) A Faster Serialization Library Based on Compile-time Reflection and C++ 20</a> of struct_pack on CppCon2022</p><p><a href="https://alibaba.github.io/yalantinglibs/struct_pack_introduce_CN.pdf" target="_blank" rel="noreferrer">Slides</a> of struct_pack on purecpp conference.</p><p><a href="https://www.youtube.com/watch?v=myhB8ZlwOlE" target="_blank" rel="noreferrer">(Video) A Faster Serialization Library Based on Compile-time Reflection and C++ 20</a> on cppcon2022</p><p><a href="https://live.csdn.net/room/csdnlive1/bKFbKP7T" target="_blank" rel="noreferrer">Video</a> on purecpp conference, start from 01:32:20 of the video record.</p><h3 id="quick-example-1" tabindex="-1">quick example <a class="header-anchor" href="#quick-example-1" aria-hidden="true">#</a></h3><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">person</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int64_t</span><span style="color:#F07178;"> id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#F07178;">string name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">double</span><span style="color:#F07178;"> salary</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">person person1</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">.id </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> .name </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello struct pack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> .age </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> .salary </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1024.42</span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// one line code serialize</span></span>
<span class="line"><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">char</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> buffer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">struct_pack</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">serialize</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">person1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// one line code deserialization</span></span>
<span class="line"><span style="color:#C792EA;">auto</span><span style="color:#A6ACCD;"> person2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">deserialize</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">person</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">buffer</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p>See more examples <a href="https://github.com/alibaba/yalantinglibs/tree/main/src/struct_pack/examples" target="_blank" rel="noreferrer">here</a>.</p><h2 id="struct-json" tabindex="-1">struct_json <a class="header-anchor" href="#struct-json" aria-hidden="true">#</a></h2><p>reflection-based json lib, very easy to do struct to json and json to struct.</p><h3 id="quick-example-2" tabindex="-1">quick example <a class="header-anchor" href="#quick-example-2" aria-hidden="true">#</a></h3><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">struct_json/json_reader.h</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">struct_json/json_writer.h</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">person</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#F07178;">string name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#82AAFF;">REFLECTION</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">person</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  person p</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">.name </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> .age </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">string str</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">struct_json</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">to_json</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;"> // {&quot;name&quot;:&quot;tom&quot;,&quot;age&quot;:20}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  person p1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">struct_json</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">from_json</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">p1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="async-simple" tabindex="-1">async_simple <a class="header-anchor" href="#async-simple" aria-hidden="true">#</a></h2><p>A C++ 20 coroutine library offering simple, light-weight and easy-to-use components to write asynchronous codes. See <a href="https://github.com/alibaba/async_simple" target="_blank" rel="noreferrer">async_simple</a></p><h2 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-hidden="true">#</a></h2><ul><li>clone repo</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git clone https://github.com/alibaba/yalantinglibs.git</span></span>
<span class="line"></span></code></pre></div><ul><li>build &amp; install</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> yalantinglibs</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir build </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> build</span></span>
<span class="line"><span style="color:#A6ACCD;">cmake .. </span></span>
<span class="line"><span style="color:#676E95;"># You can use those option to skip build unit-test &amp; benchmark &amp; example: </span></span>
<span class="line"><span style="color:#676E95;"># cmake .. -DBUILD_EXAMPLES=OFF -DBUILD_BENCHMARK=OFF -DBUILD_UNIT_TESTS=OFF</span></span>
<span class="line"><span style="color:#A6ACCD;">make -j</span></span>
<span class="line"><span style="color:#A6ACCD;">make install</span></span>
<span class="line"></span></code></pre></div><ul><li>run tests</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> tests</span></span>
<span class="line"><span style="color:#A6ACCD;">ctest </span><span style="color:#82AAFF;">.</span></span>
<span class="line"></span></code></pre></div><ul><li>start your coding</li></ul><h3 id="coro-rpc-1" tabindex="-1">coro_rpc <a class="header-anchor" href="#coro-rpc-1" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> yalantinglibs/src/coro_rpc/examples/helloworld</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir build </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> build</span></span>
<span class="line"><span style="color:#A6ACCD;">cmake ..</span></span>
<span class="line"><span style="color:#A6ACCD;">make -j</span></span>
<span class="line"><span style="color:#676E95;"># For more detail, see Cmakelist.txt in helloworld.</span></span>
<span class="line"></span></code></pre></div><h3 id="struct-pack-1" tabindex="-1">struct_pack <a class="header-anchor" href="#struct-pack-1" aria-hidden="true">#</a></h3><p>TODO</p><h2 id="benchmark" tabindex="-1">Benchmark <a class="header-anchor" href="#benchmark" aria-hidden="true">#</a></h2><p>options:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">./benchmark_client </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">threads</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">client_pre_thread</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">pipeline_size</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">port</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">test_data_path</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">test_time</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">warm_up_time</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="build-options" tabindex="-1">Build Options <a class="header-anchor" href="#build-options" aria-hidden="true">#</a></h2><table><thead><tr><th>option</th><th>description</th><th>default</th></tr></thead><tbody><tr><td>CMAKE_BUILD_TYPE</td><td>build type</td><td>Release</td></tr><tr><td>BUILD_WITH_LIBCXX</td><td>Build with libc++</td><td>OFF</td></tr><tr><td>BUILD_EXAMPLES</td><td>Build examples</td><td>ON</td></tr><tr><td>BUILD_BENCHMARK</td><td>Build benchmark</td><td>ON</td></tr><tr><td>BUILD_UNIT_TESTS</td><td>Build unit test</td><td>ON</td></tr><tr><td>USE_CONAN</td><td>Use conan package manager to handle dependencies</td><td>OFF</td></tr><tr><td>ENABLE_SSL</td><td>Enable ssl support</td><td>OFF</td></tr><tr><td>ENABLE_IO_URING</td><td>Enable io_uring support</td><td>OFF</td></tr></tbody></table><h2 id="dependencies" tabindex="-1">Dependencies <a class="header-anchor" href="#dependencies" aria-hidden="true">#</a></h2><p>We use doctest for unit test. All third-party dependencies are put in include/thirdparty.</p><h3 id="coro-rpc-2" tabindex="-1">coro_rpc <a class="header-anchor" href="#coro-rpc-2" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/alibaba/yalantinglibs" target="_blank" rel="noreferrer">struct_pack</a></li><li><a href="https://github.com/alibaba/yalantinglibs" target="_blank" rel="noreferrer">easylog</a></li><li><a href="https://github.com/chriskohlhoff/asio" target="_blank" rel="noreferrer">asio</a></li><li>openssl (optional)</li></ul><h3 id="struct-pack-2" tabindex="-1">struct_pack <a class="header-anchor" href="#struct-pack-2" aria-hidden="true">#</a></h3><p>No dependency.</p><h3 id="struct-json-1" tabindex="-1">struct_json <a class="header-anchor" href="#struct-json-1" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/qicosmos/iguana" target="_blank" rel="noreferrer">iguana</a></li></ul><h3 id="struct-pb" tabindex="-1">struct_pb <a class="header-anchor" href="#struct-pb" aria-hidden="true">#</a></h3><p>TODO</p><h3 id="easylog" tabindex="-1">easylog <a class="header-anchor" href="#easylog" aria-hidden="true">#</a></h3><p>No dependency.</p><h1 id="how-to-generate-document" tabindex="-1">How to generate document <a class="header-anchor" href="#how-to-generate-document" aria-hidden="true">#</a></h1><p>see <a href="https://alibaba.github.io/yalantinglibs/README.html" target="_blank" rel="noreferrer">Build Website</a></p><h1 id="how-to-contribute" tabindex="-1">How to Contribute <a class="header-anchor" href="#how-to-contribute" aria-hidden="true">#</a></h1><ol><li>Create an issue in the issue template.</li><li>Run tests and <code>git-clang-format HEAD^</code> locally for the change.</li><li>Create a PR, fill in the PR template.</li><li>Choose one or more reviewers from contributors: (e.g., qicosmos, poor-circle, PikachuHyA).</li><li>Get approved and merged.</li></ol><h1 id="discussion-group" tabindex="-1">Discussion group <a class="header-anchor" href="#discussion-group" aria-hidden="true">#</a></h1><p>DingTalk group</p>`,73),D=s("img",{src:i,alt:"dingtalk",width:"200",height:"200",align:"bottom"},null,-1),F=s("h1",{id:"license",tabindex:"-1"},[t("License "),s("a",{class:"header-anchor",href:"#license","aria-hidden":"true"},"#")],-1),h=s("p",null,"yaLanTingLibs is distributed under the Apache License (Version 2.0) This product contains various third-party components under other open-source licenses. See the NOTICE file for more information.",-1);function u(C,A,b,g,m,_){const a=r("center");return c(),l("div",null,[d,e(a,null,{default:o(()=>[D]),_:1}),F,h])}const v=n(y,[["render",u]]);export{f as __pageData,v as default};
