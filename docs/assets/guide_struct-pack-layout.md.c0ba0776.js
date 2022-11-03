import{_ as t,c as a,o as n,a as s}from"./app.3b6e8018.js";const o="/yalantinglibs/assets/memory_layout1.6cabe2e8.svg",i="/yalantinglibs/assets/memory_layout2.0f256944.svg",l="/yalantinglibs/assets/hash_info.d594cbe0.svg",d="/yalantinglibs/assets/meta_info.640e2e20.svg",r="/yalantinglibs/assets/person_type_info.5863fe19.svg",p="/yalantinglibs/assets/release_person.8a54deb1.svg",c="/yalantinglibs/assets/debug_person.877a20d2.svg",h="/yalantinglibs/assets/release_person_long_name.d1a06201.svg",u="/yalantinglibs/assets/array_layout.66a9423e.svg",y="/yalantinglibs/assets/string_layout.b0ba0eca.svg",g="/yalantinglibs/assets/set_layout.884cebcd.svg",f="/yalantinglibs/assets/map_layout.9983cecb.svg",m="/yalantinglibs/assets/optional_has_value.9d7ef29a.svg",b="/yalantinglibs/assets/optional_null.0d9ffde0.svg",e="/yalantinglibs/assets/variant.f23b026d.svg",_="/yalantinglibs/assets/variant_with_error.8426eb66.svg",F="/yalantinglibs/assets/release_person_with_compatible.69a839c8.svg",B=JSON.parse('{"title":"memory layout of struct_pack","description":"","frontmatter":{},"headers":[{"level":2,"title":"2.1 header","slug":"_2-1-header","link":"#_2-1-header","children":[]},{"level":2,"title":"2.2 total data length(Optional)","slug":"_2-2-total-data-length-optional","link":"#_2-2-total-data-length-optional","children":[]},{"level":2,"title":"2.3 full type information(Optional)","slug":"_2-3-full-type-information-optional","link":"#_2-3-full-type-information-optional","children":[]},{"level":2,"title":"3.1 Structural data","slug":"_3-1-structural-data","link":"#_3-1-structural-data","children":[]},{"level":2,"title":"3.2 fundamental types","slug":"_3-2-fundamental-types","link":"#_3-2-fundamental-types","children":[{"level":3,"title":"fix-sized unsigned integers","slug":"fix-sized-unsigned-integers","link":"#fix-sized-unsigned-integers","children":[]},{"level":3,"title":"fix-sized unsigned integers","slug":"fix-sized-unsigned-integers-1","link":"#fix-sized-unsigned-integers-1","children":[]},{"level":3,"title":"fix-sized unsigned integers","slug":"fix-sized-unsigned-integers-2","link":"#fix-sized-unsigned-integers-2","children":[]},{"level":3,"title":"variant length signed integers","slug":"variant-length-signed-integers","link":"#variant-length-signed-integers","children":[]},{"level":3,"title":"fix-sized floating-point types","slug":"fix-sized-floating-point-types","link":"#fix-sized-floating-point-types","children":[]},{"level":3,"title":"fix-sized character types","slug":"fix-sized-character-types","link":"#fix-sized-character-types","children":[]},{"level":3,"title":"enum","slug":"enum","link":"#enum","children":[]},{"level":3,"title":"boolean","slug":"boolean","link":"#boolean","children":[]}]},{"level":2,"title":"3.3 data containers","slug":"_3-3-data-containers","link":"#_3-3-data-containers","children":[{"level":3,"title":"fixed-length arrays","slug":"fixed-length-arrays","link":"#fixed-length-arrays","children":[]},{"level":3,"title":"sequential containers","slug":"sequential-containers","link":"#sequential-containers","children":[]},{"level":3,"title":"set","slug":"set","link":"#set","children":[]},{"level":3,"title":"map","slug":"map","link":"#map","children":[]},{"level":3,"title":"optional<T>","slug":"optional-t","link":"#optional-t","children":[]},{"level":3,"title":"variant","slug":"variant","link":"#variant","children":[]},{"level":3,"title":"expected<T,E>","slug":"expected-t-e","link":"#expected-t-e","children":[]},{"level":3,"title":"monostate","slug":"monostate","link":"#monostate","children":[]}]}],"relativePath":"guide/struct-pack-layout.md","lastUpdated":null}'),v={name:"guide/struct-pack-layout.md"},x=s('<h1 id="memory-layout-of-struct-pack" tabindex="-1">memory layout of struct_pack <a class="header-anchor" href="#memory-layout-of-struct-pack" aria-hidden="true">#</a></h1><p><strong>By Default</strong>, the memory layout of struct_pack is shown in the figure bellow:</p><p><img src="'+o+'" alt=""></p><p>It contains 4 bytes of <code>type hash</code>, followed by the data payload of variable length depends on the object provided by user.</p><p>The default memory layout applies when <strong>both</strong> of the following conditions are met:</p><ol><li>struct_pack does not contain the compatible field</li><li>struct_pack does not store full type information</li><li>the maximum length of struct_pack&#39;s container is less than 256</li></ol><p>In the <strong>default case</strong>, struct_pack could omit meta information for a more compact memory layout.</p><p>However, in the <strong>Non-default case</strong>, struct_pack must contain the <strong>meta information</strong> field, at which point the complete memory layout is shown as below:</p><p><img src="'+i+'" alt=""></p><p>The layout of each field will be described in the following sections.</p><h1 id="_1-type-hash-mandatory" tabindex="-1">1. type hash(Mandatory) <a class="header-anchor" href="#_1-type-hash-mandatory" aria-hidden="true">#</a></h1><p>The type hash is located in the header of struct_pack and is 4 bytes in total. It is used for type-checking of struct_pack.</p><p>Higher 31 bits: type hash data. It is the higher 31 bit of the MD5 hash result of the struct_pack type information.</p><p>Lower 1 bit\uFF1A meta information flag</p><p><img src="'+l+'" alt=""></p><h1 id="_2-meta-information-optional" tabindex="-1">2. meta information(Optional) <a class="header-anchor" href="#_2-meta-information-optional" aria-hidden="true">#</a></h1><p>When meta information flag in type hash is 1, struct_pack will contain the meta-information field. The meta-information consists of a one-byte meta-information header and a number of bytes of meta-information.</p><h2 id="_2-1-header" tabindex="-1">2.1 header <a class="header-anchor" href="#_2-1-header" aria-hidden="true">#</a></h2><p>The meta information header is one byte in total, which describes the configuration of one struct_pack object.</p><p>The detailed layout is shown figure in bellow:</p><p><img src="'+d+`" alt=""></p><p>Current configurations are:</p><table><thead><tr><th>Configuration</th><th>Contents</th><th>Bit location</th><th>Dependency</th><th>Configurable</th></tr></thead><tbody><tr><td>DATA_SIZE</td><td>DATA_SIZE represents the total bytes of the serialization result, when compatible fields exist</td><td>0b000000**</td><td>depends on compatible field</td><td>N</td></tr><tr><td>ADD_TYPE_INFO</td><td>A flag indicates if full type information exists</td><td>0b00000*00</td><td>Release(0) Debug(1); Could be set by user manually</td><td>Y</td></tr><tr><td>LEN_SIZE</td><td>Number of bytes occupied by the containers</td><td>0b000**000</td><td>Depends on the latest data container in the encoded result</td><td>N</td></tr></tbody></table><ol><li><code>DATA_SIZE</code>(2 bits). When <code>compatible&lt;T&gt;</code> fields are present, we need to record the total data length. so</li></ol><ul><li>00 : total data length field not present(so that no compatible fields)</li><li>01 : total data length is recorded in a data field of 2 bytes</li><li>10 : total data length is recorded in a data field of 4 bytes</li><li>11 : total data length is recorded in a data field of 9 bytes</li></ul><ol start="2"><li><code>ADD_TYPE_INFO</code>(1 bit). It is a flag indicating if type information is present</li></ol><ul><li>0 : full type information not present (0 in release mode)</li><li>1 : full type information present</li></ul><ol start="3"><li><code>LEN_SIZE</code> (2 bits). It records the maximum number of bytes of the containers.</li></ol><ul><li>00 : 1 byte (in range of uint8_t, 0~256)</li><li>01 : 2 bytes (in range of uint16_t)</li><li>10 : 4 bytes (in range of uint32_t)</li><li>11 : 8 bytes (in range of uint64_t)</li></ul><ol start="4"><li><code>RESERVED</code>(3 bits).</li></ol><h2 id="_2-2-total-data-length-optional" tabindex="-1">2.2 total data length(Optional) <a class="header-anchor" href="#_2-2-total-data-length-optional" aria-hidden="true">#</a></h2><p>The length of this field depends on <code>DATA_SIZE</code>(2/4/8bytes). It is a unsigned integer represents the total length of the struct_pack data.</p><h2 id="_2-3-full-type-information-optional" tabindex="-1">2.3 full type information(Optional) <a class="header-anchor" href="#_2-3-full-type-information-optional" aria-hidden="true">#</a></h2><p>This field is a &#39;\\0&#39; tailed string, which represents one legal struct_pack type. The full type information is recorded by this string and the MD5 hash value of this field is used to get the <code>type hash</code> higher 31 bits.</p><p>The length of this field could be determined at compile time if it passed validation. However, it&#39;s length could only be determined by the position of char <code>&#39;\\0&#39;</code> when validation failed.</p><p>The encoding rules for this field and its mapping to the struct_pack type tree can be found in<a href="https://alibaba.github.io/yalantinglibs/guide/struct-pack-type-system.html" target="_blank" rel="noreferrer">struct_pack type system</a></p><p>Take the following type as an example:</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">person</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#F07178;">string name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>Its type info is as follows:</p><p><img src="`+r+`" alt="\u7C7B\u578B\u4FE1\u606F"></p><p>We can see that type info ends with <code>\\0</code>.</p><h1 id="_3-known-data-payload-mandatory" tabindex="-1">3. known data payload(Mandatory) <a class="header-anchor" href="#_3-known-data-payload-mandatory" aria-hidden="true">#</a></h1><p>Serialization results of all known data fields could be found in this payload.</p><h2 id="_3-1-structural-data" tabindex="-1">3.1 Structural data <a class="header-anchor" href="#_3-1-structural-data" aria-hidden="true">#</a></h2><p>Structural data types(such as struct, class, pair, tuple and so on) is a data container of defined data field. In struct_pack, all data fields in one struct are Sequential placed in the memory in the order of their definition in struct, and no more additional information required in this kind of memory layout.</p><p>For example, if we define a struct person as bellow:</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">person</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#F07178;">string name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>In release mode, the serialization of one <code>person{.age=24,.name=&quot;Betty&quot;}</code> object could be:</p><p><img src="`+p+'" alt="person in release mode"></p><p>No meta information in the figure above because it&#39;s zeros and could be omitted by default.</p><p>However, in debug mode, additional meta information will be inserted into the serialization result to avoid hash conflicts, as shown bellow:</p><p><img src="'+c+'" alt="person in debug mode"></p><p>As demonstrated, the meta header is <code>0x04</code>, which indicates type information is available.</p><p>And serialization of one <code>person{.age=24,.name=std::string{256,&#39;A&#39;}}</code> object in release mode is:</p><p><img src="'+h+'" alt=""> where the meta information header is <code>0x08</code>, which indicates a <code>size_type</code> length of <code>2</code> bytes.</p><h2 id="_3-2-fundamental-types" tabindex="-1">3.2 fundamental types <a class="header-anchor" href="#_3-2-fundamental-types" aria-hidden="true">#</a></h2><p>All fundamental types(such as signed and unsigned integers, floating-point types, character types, enum and boolean) have definitive length.</p><h3 id="fix-sized-unsigned-integers" tabindex="-1">fix-sized unsigned integers <a class="header-anchor" href="#fix-sized-unsigned-integers" aria-hidden="true">#</a></h3><table><thead><tr><th>type</th><th>length(bytes)</th><th>format</th></tr></thead><tbody><tr><td>uint8_t</td><td>1</td><td>original code</td></tr><tr><td>uint16_t</td><td>2</td><td>original code</td></tr><tr><td>uint32_t</td><td>4</td><td>original code</td></tr><tr><td>uint64_t</td><td>8</td><td>original code</td></tr></tbody></table><h3 id="fix-sized-unsigned-integers-1" tabindex="-1">fix-sized unsigned integers <a class="header-anchor" href="#fix-sized-unsigned-integers-1" aria-hidden="true">#</a></h3><table><thead><tr><th>type</th><th>length(bytes)</th><th>format</th></tr></thead><tbody><tr><td>int8_t</td><td>1</td><td>two&#39;s Complement</td></tr><tr><td>int16_t</td><td>2</td><td>two&#39;s Complement</td></tr><tr><td>int32_t</td><td>4</td><td>two&#39;s Complement</td></tr><tr><td>int64_t</td><td>8</td><td>two&#39;s Complement</td></tr></tbody></table><h3 id="fix-sized-unsigned-integers-2" tabindex="-1">fix-sized unsigned integers <a class="header-anchor" href="#fix-sized-unsigned-integers-2" aria-hidden="true">#</a></h3><table><thead><tr><th>type</th><th>length(bytes)</th><th>format</th></tr></thead><tbody><tr><td>struct_pack::var_uint32_t</td><td>1-5 (variant length)</td><td>varint</td></tr><tr><td>struct_pack::var_uint64_t</td><td>1-10(variant length)</td><td>varint</td></tr></tbody></table><h3 id="variant-length-signed-integers" tabindex="-1">variant length signed integers <a class="header-anchor" href="#variant-length-signed-integers" aria-hidden="true">#</a></h3><table><thead><tr><th>type</th><th>length(bytes)</th><th>format</th></tr></thead><tbody><tr><td>struct_pack::var_int32_t</td><td>1-5 (variant length)</td><td>zigzag + varint</td></tr><tr><td>struct_pack::var_int64_t</td><td>1-10(variant length)</td><td>zigzag + varint</td></tr></tbody></table><h3 id="fix-sized-floating-point-types" tabindex="-1">fix-sized floating-point types <a class="header-anchor" href="#fix-sized-floating-point-types" aria-hidden="true">#</a></h3><table><thead><tr><th>type</th><th>length(bytes))</th><th>format</th></tr></thead><tbody><tr><td>float</td><td>4</td><td>IEEE 754 single-precision</td></tr><tr><td>double</td><td>8</td><td>IEEE 754 double-precision</td></tr></tbody></table><h3 id="fix-sized-character-types" tabindex="-1">fix-sized character types <a class="header-anchor" href="#fix-sized-character-types" aria-hidden="true">#</a></h3><table><thead><tr><th>type</th><th>length(bytes))</th><th>format</th></tr></thead><tbody><tr><td>char8_t</td><td>1</td><td>original code</td></tr><tr><td>char16_t</td><td>2</td><td>original code</td></tr><tr><td>char32_t</td><td>4</td><td>original code</td></tr><tr><td>wchar_t</td><td>Platform-dependent</td><td>original code</td></tr></tbody></table><h3 id="enum" tabindex="-1">enum <a class="header-anchor" href="#enum" aria-hidden="true">#</a></h3><p>Enum types shares the same memory layout with the corresponding integer types.</p><h3 id="boolean" tabindex="-1">boolean <a class="header-anchor" href="#boolean" aria-hidden="true">#</a></h3><p>Boolean takes on byte. It is <code>false</code> if all bits of this byte are 0 and true otherwise.</p><h2 id="_3-3-data-containers" tabindex="-1">3.3 data containers <a class="header-anchor" href="#_3-3-data-containers" aria-hidden="true">#</a></h2><p>Most data structures are supported in struct_pack and each of them has its dedicated memory layout.</p><h3 id="fixed-length-arrays" tabindex="-1">fixed-length arrays <a class="header-anchor" href="#fixed-length-arrays" aria-hidden="true">#</a></h3><p>For C-style array, C++ <code>std::array</code> or user-defined arrays, array length information is not stored because it is known in compile time. All elements are encoded by individually coding the elements of the array in their natural order, 0 through n -1.</p><p>For instance, serialization of <code>std::array&lt;int,2&gt;{24,42}</code> is encoded as the figure bellow:</p><p><img src="'+u+'" alt=""></p><h3 id="sequential-containers" tabindex="-1">sequential containers <a class="header-anchor" href="#sequential-containers" aria-hidden="true">#</a></h3><p>For Sequential containers such as <code>std::vector</code>,<code>std::deque</code>,<code>std::list</code>,<code>std::string</code> or any user-defined structures, the serialization begins with the number of elements of <code>size_type</code>, then all elements are encoded in their natural order.</p><p>For example, an <code>std::string{&quot;Hello&quot;}</code> could be encoded as bellow:</p><p><img src="'+y+'" alt=""></p><h3 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-hidden="true">#</a></h3><p>For <code>std::set</code> or user-defined set, the memory layout begins with the elements count of <code>size_type</code>, followed by the numbers of <code>keys</code> in this set.</p><p>For example, a <code>std::set&lt;int&gt;{42,24}</code> could be encoded as:</p><p><img src="'+g+`" alt=""></p><h3 id="map" tabindex="-1">map <a class="header-anchor" href="#map" aria-hidden="true">#</a></h3><p>For <code>std::map&lt;K,V&gt;</code> or similar user-defined data, the memory layout begins with number of elements of type <code>size_type</code>, followed by each data field of <code>value_type</code>.</p><p>For example, a</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#F78C6C;">42</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},{</span><span style="color:#F78C6C;">24</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Student</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}}</span></span>
<span class="line"></span></code></pre></div><p>is encoded as:</p><p><img src="`+f+'" alt=""></p><h3 id="optional-t" tabindex="-1"><code>optional&lt;T&gt;</code> <a class="header-anchor" href="#optional-t" aria-hidden="true">#</a></h3><p>For <code>std::optional&lt;T&gt;</code> or similar user-defined data, it begins with a bool indicates if the value is present or not. The value will be followed by this bool field if it is present.</p><p>For example, <code>std::optional&lt;int&gt;{42}</code> is encoded as:</p><p><img src="'+m+'" alt=""></p><p>And a <code>std::optional&lt;int&gt;{std::nullopt}</code> is encoded as:</p><p><img src="'+b+'" alt=""></p><h3 id="variant" tabindex="-1">variant <a class="header-anchor" href="#variant" aria-hidden="true">#</a></h3><p>For <code>std::variant</code> or similar user-defined data, it begins with one byte carrying the <code>variant index</code> information, of unsigned integer type, indicating the real type stored in it. Then it is followed by the encoded data of the real data type.</p><p>For example, <code>std::variant&lt;int,std::string,double&gt;{3.14}</code> is encoded as:</p><p><img src="'+e+'" alt=""></p><h3 id="expected-t-e" tabindex="-1">expected&lt;T,E&gt; <a class="header-anchor" href="#expected-t-e" aria-hidden="true">#</a></h3><p>For <code>std::expected&lt;T,E&gt;</code> or similar user-defined data, it begins with a boolean type. When the header is true, the <code>expected</code> value is present so the memory layout is followed by the encoded value <code>T</code>. When the header is false, the error code is present so it is followed by the encoded error code.</p><p>For example, <code>std::expected&lt;int,std::errc&gt;{42}</code> is encoded as:</p><p><img src="'+e+'" alt=""></p><p>and <code>std::expect&lt;int,std::errc&gt;{std::unexpected{std::errc::no_buffer_space}}</code> is encoded as bellow:</p><p><img src="'+_+`" alt=""></p><h3 id="monostate" tabindex="-1">monostate <a class="header-anchor" href="#monostate" aria-hidden="true">#</a></h3><p>It is an empty type and encoded as zero length.</p><h1 id="_4-unknown-fields-optional" tabindex="-1">4. Unknown fields(Optional) <a class="header-anchor" href="#_4-unknown-fields-optional" aria-hidden="true">#</a></h1><p>For backward/forward compatibility, new added fields are of type <code>struct_pack::compatible&lt;T&gt;</code> be appended at the end of the object. If <code>compatible&lt;T&gt;</code> is present, the total data size <strong>must</strong> be stored in the meta information.</p><p>During deserialization, unknown <code>compatible&lt;T&gt;</code> fields are omitted and skipped. For <code>compatible&lt;T&gt;</code> fields not present, it is desensitized as empty value.</p><p>Each <code>compatible&lt;T&gt;</code> are placed in the same order as they are defined in the structure. And each <code>compatible&lt;T&gt;</code> field is encoded in the same way as <code>optional&lt;T&gt;</code> field.s</p><p>For example,</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">person</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#F07178;">string name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">struct_pack</span><span style="color:#89DDFF;">::</span><span style="color:#F07178;">compatible</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">double</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> salary</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>In release mode, object <code>person{.age=24,.name=&quot;Betty&quot;,.salary=2000.0}</code> is encoded as:</p><p><img src="`+F+'" alt=""></p><p>In the figure above, the meta information header is <code>0x01</code>, which means <code>compatible&lt;T&gt;</code> is contained and the total length is less than 65536.</p>',120),D=[x];function k(w,z,C,T,E,A){return n(),a("div",null,D)}const q=t(v,[["render",k]]);export{B as __pageData,q as default};
