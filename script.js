// Import jsPDF from UMD namespace
const { jsPDF } = window.jspdf;

// Full detailed topics with mini short notes
const data = {
  dsa: {
    name: "Data Structures & Algorithms",
    topics: {
      "Arrays & Strings": 
        `<h3>Arrays & Strings in Java</h3>
<p>
  Arrays are one of the most fundamental data structures in programming. An array stores a fixed-size sequential collection of elements of the same type. Strings in Java are objects that represent sequences of characters.
</p>

<h4>Arrays in Java</h4>
<p>
  Arrays are zero-indexed, meaning the first element is at index 0. You can declare, instantiate, and initialize arrays in various ways:
</p>

<pre><code class="language-java">
// Declaration
int[] numbers;

// Instantiation
numbers = new int[5];

// Initialization
numbers[0] = 10;
numbers[1] = 20;

// Or combined declaration and initialization
int[] primes = {2, 3, 5, 7, 11};
</code></pre>

<h4>Basic Array Operations</h4>
<ul>
  <li>Access elements by index</li>
  <li>Iterate using loops</li>
  <li>Modify elements</li>
</ul>

<pre><code class="language-java">
for (int i = 0; i &lt; numbers.length; i++) {
  System.out.println("Element at index " + i + " is " + numbers[i]);
}
</code></pre>

<h4>Strings in Java</h4>
<p>
  Strings are immutable sequences of characters. You can create strings using literals or constructors.
</p>

<pre><code class="language-java">
// Using string literal
String greeting = "Hello, World!";

// Using constructor
String another = new String("Java Programming");
</code></pre>

<h4>Common String Operations</h4>
<ul>
  <li>Concatenation: <code>str1 + str2</code></li>
  <li>Length: <code>str.length()</code></li>
  <li>Substring: <code>str.substring(start, end)</code></li>
  <li>Character access: <code>str.charAt(index)</code></li>
  <li>Conversion to char array: <code>str.toCharArray()</code></li>
</ul>

<pre><code class="language-java">
String s = "DataStructures";
System.out.println("Length: " + s.length());
System.out.println("Substring (0,4): " + s.substring(0,4));
System.out.println("Char at index 2: " + s.charAt(2));

char[] chars = s.toCharArray();
for (char c : chars) {
  System.out.print(c + " ");
}
</code></pre>

<h4>Example: Reverse a String</h4>

<pre><code class="language-java">
public class ReverseString {
  public static void main(String[] args) {
    String input = "NoBitA";
    String reversed = "";

    for (int i = input.length() - 1; i >= 0; i--) {
      reversed += input.charAt(i);
    }

    System.out.println("Reversed string: " + reversed);
  }
}
</code></pre>

<h4>Summary</h4>
<p>
  Arrays offer a simple way to store multiple elements of the same type with constant-time access. Strings are immutable objects with rich built-in methods for manipulation. Mastering arrays and strings is crucial for solving many algorithmic problems.
</p>

        `,
      "Linked Lists": 
        "Linked Lists consist of nodes where each node contains data and a reference to the next node, enabling dynamic memory usage.",
      "Stacks & Queues": 
        "Stack follows LIFO; Queue follows FIFO principle. Both used in various algorithmic problems and system design.",
      "Trees & Graphs": 
        "Trees are hierarchical with root nodes; graphs are networks of nodes connected by edges (can be directed/undirected).",
      "Hashing": 
        "Hash functions map data to indices in a hash table, enabling fast search, insert, and delete operations.",
      "Sorting Algorithms": 
        "Common algorithms: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort with different time complexities.",
      "Searching Algorithms": 
        "Linear search checks elements sequentially; binary search divides the array in half each step (requires sorted data).",
      "Dynamic Programming": 
        "Optimizes problems by storing subproblem results to avoid recomputation. Used in optimization and counting problems.",
      "Greedy Algorithms": 
        "Makes locally optimal choices aiming for a global optimum; useful for interval scheduling, MST, etc.",
      "Graph Algorithms": 
        "Includes DFS, BFS, shortest path algorithms like Dijkstra and Bellman-Ford, and MST algorithms like Kruskal and Prim."
    }
  },
  hld: {
    name: "High-Level Design",
    topics: {
      "System Architecture": `<h3>System Architecture</h3>
<p>
  System architecture refers to the conceptual model that defines the structure, behavior, and more views of a system. It is a blueprint that outlines how different components of the system interact with each other to fulfill business requirements.
</p>
<p>
  A typical system architecture includes the following layers:
</p>
<ul>
  <li><b>Presentation Layer:</b> User interface layer that interacts with the users.</li>
  <li><b>Business Logic Layer:</b> Contains the core functionality and business rules.</li>
  <li><b>Data Access Layer:</b> Manages database interactions and data storage.</li>
  <li><b>Database Layer:</b> Physical data storage and retrieval systems.</li>
</ul>
<p>
  Here is a simple block diagram illustrating the architecture:
</p>
<img src="https://i.imgur.com/QuF0yVq.png" alt="System Architecture Diagram" style="width: 100%; max-width: 600px; border: 1px solid #ddd; border-radius: 8px;">
<p>
  This architecture ensures separation of concerns, scalability, maintainability, and flexibility.
</p>
<p><b>Benefits:</b></p>
<ul>
  <li>Clear separation of concerns</li>
  <li>Scalability: Easy to scale individual layers</li>
  <li>Maintainability: Easier to update parts without affecting others</li>
  <li>Reusability of components</li>
</ul>
<p>
  Real-world examples include web applications where the front-end (presentation) communicates with the back-end APIs (business logic), which in turn interact with databases.
</p>
`
  
       ,
      "Microservices": 
        "An architectural style breaking an application into loosely coupled services that communicate over APIs.",
      "Scalability": 
        "Designing systems to handle increased load by scaling vertically or horizontally.",
      "Load Balancing": 
        "Distributes incoming network traffic across multiple servers to ensure reliability and availability.",
      "Database Design": 
        "Structuring databases with normalization, indexing, and choosing appropriate DBMS types.",
      "Caching Strategies": 
        "Using in-memory stores like Redis or Memcached to reduce latency and database load.",
      "Message Queues": 
        "Asynchronous communication between services to decouple processing and increase resilience.",
      "API Gateway": 
        "A single entry point for client requests, providing routing, rate limiting, and security.",
      "Monitoring & Logging": 
        "Tracking system performance and errors to ensure health and facilitate debugging.",
      "Security Considerations": 
        "Authentication, authorization, encryption, and data privacy best practices."
    }
  },
  lld: {
    name: "Low-Level Design",
    topics: {
      "Class Diagrams": 
        "UML diagrams representing classes, attributes, methods, and their relationships.",
      "Design Patterns": 
        "Common reusable solutions like Singleton, Factory, Observer, Strategy, and Decorator.",
      "API Design": 
        "Defining clear, consistent, and secure interfaces for software components to interact.",
      "Concurrency": 
        "Techniques to safely handle multiple threads or processes accessing shared resources.",
      "Database Schema Design": 
        "Detailing tables, columns, constraints, and relations for efficient storage and retrieval.",
      "SOLID Principles": 
        "Five design principles to make software designs more understandable, flexible, and maintainable.",
      "Code Modularization": 
        "Separating code into reusable and independent modules to improve readability and maintenance.",
      "Error Handling": 
        "Strategies to detect, report, and recover from errors gracefully in applications.",
      "Unit Testing": 
        "Writing tests for individual units of code to ensure correctness and facilitate refactoring.",
      "Refactoring Techniques": 
        "Improving code structure and readability without changing its external behavior."
    }
  }
};

const tabs = document.querySelectorAll(".tab-btn");
const topicList = document.getElementById("topicList");
const blogContentArea = document.getElementById("blogContentArea");

let activeTab = "dsa";
let activeTopic = null;

function init() {
  renderTopics(activeTab);
  const firstTopic = Object.keys(data[activeTab].topics)[0];
  if (firstTopic) {
    setActiveTopic(firstTopic);
  }
}

function renderTopics(tabKey) {
  topicList.innerHTML = `<h3>${data[tabKey].name}</h3>`;
  const topics = data[tabKey].topics;

  for (const topic in topics) {
    const topicItem = document.createElement("div");
    topicItem.classList.add("topic-item");
    topicItem.textContent = topic;
    topicItem.dataset.topic = topic;

    if (topic === activeTopic) {
      topicItem.classList.add("active");
    }

    topicItem.addEventListener("click", () => {
      setActiveTopic(topic);
    });

    topicList.appendChild(topicItem);
  }
}

function setActiveTopic(topic) {
  activeTopic = topic;

  document.querySelectorAll(".topic-item").forEach(item => {
    item.classList.remove("active");
  });

  const activeItem = [...document.querySelectorAll(".topic-item")].find(el => el.dataset.topic === topic);
  if (activeItem) activeItem.classList.add("active");

  // Render content + Download button
  blogContentArea.innerHTML = `
    <h2>${topic}</h2>
    <p>${data[activeTab].topics[topic]}</p>
    <button id="downloadPdfBtn">Download as PDF</button>
  `;

  document.getElementById("downloadPdfBtn").addEventListener("click", () => {
    downloadPDF(topic, data[activeTab].topics[topic]);
  });
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    if (tab.dataset.tab === activeTab) return;

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    activeTab = tab.dataset.tab;
    activeTopic = null;

    renderTopics(activeTab);
    const firstTopic = Object.keys(data[activeTab].topics)[0];
    if (firstTopic) setActiveTopic(firstTopic);
  });
});

// PDF download function with watermark header
function downloadPDF(title, content) {
  const doc = new jsPDF();

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const margin = 15;
  const maxLineWidth = pageWidth - margin * 2;

  // Add watermark header (at top center)
  doc.setFontSize(10);
  doc.setTextColor(150);
  doc.text("Notes from NoBitA", pageWidth / 2, 10, { align: "center" });

  // Add title
  doc.setTextColor(30);
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(title, margin, 30);

  // Add content text, wrapped
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");

  const splitContent = doc.splitTextToSize(content, maxLineWidth);
  doc.text(splitContent, margin, 45);

  // Save PDF
  doc.save(`${title.replace(/\s+/g, "_")}_NoBitA_Notes.pdf`);
}

init();
