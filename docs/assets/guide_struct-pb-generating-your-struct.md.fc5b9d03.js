import{_ as s,c as e,o as a,a as n}from"./app.3b6e8018.js";const C=JSON.parse('{"title":"Generating source code","description":"","frontmatter":{},"headers":[],"relativePath":"guide/struct-pb-generating-your-struct.md","lastUpdated":null}'),t={name:"guide/struct-pb-generating-your-struct.md"},o=n(`<h1 id="generating-source-code" tabindex="-1">Generating source code <a class="header-anchor" href="#generating-source-code" aria-hidden="true">#</a></h1><p>First, you need install protobuf.</p><p>on Mac</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">brew install protobuf</span></span>
<span class="line"></span></code></pre></div><p>on Ubuntu</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">apt-get install protobuf</span></span>
<span class="line"></span></code></pre></div><p>on CentOS</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yum install protobuf</span></span>
<span class="line"></span></code></pre></div><p>Second, you need install or compile struct_pb protoc plugin <code>protoc-gen-struct_pb</code>.</p><p>Finally, you can use the following command to generate the code.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">protoc --plugin=protoc-gen-struct_pb --struct_pb_out </span><span style="color:#82AAFF;">.</span><span style="color:#A6ACCD;"> xxx.proto</span></span>
<span class="line"></span></code></pre></div><p>or use the helper function on your <code>CMakeLists.txt</code></p><div class="language-cmake"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">find_package</span><span style="color:#A6ACCD;">(Protobuf)</span></span>
<span class="line"><span style="color:#A6ACCD;">protobuf_generate_struct_pb(PROTO_SRCS PROTO_HDRS xxxx.proto)</span></span>
<span class="line"></span></code></pre></div>`,13),l=[o];function p(c,r,i,u,d,g){return a(),e("div",null,l)}const h=s(t,[["render",p]]);export{C as __pageData,h as default};
