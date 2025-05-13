import React, { useState } from 'react';
import Footer from './Footer';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi, I am your Healthcare assistant. Type 'quit' to end the conversation." },
  ]);
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('en'); // Default language

  const responses = {
    en: [
      [/(hi|hello|hey)/i, ["Hello, welcome to PharmaDaily! How can I assist you today?", "Hi there! How can I help?"]],
      [/how are you\??/i, ["I'm doing great, thanks for asking!", "I'm good, how about you?"]],
      [/(.*)(purchase|buy)(.*)/i, ["We offer a variety of drugs to manage various illnesses. Are you interested in purchasing today?", "What kind of illness or medical problem are you facing?"]],
      [/(.*)(colds|flu)(.*)/i, ["Yes, we do offer medicine for common colds and flu. These may include ibuprofen and decongestants such as nasal sprays."]],
      [/(.*)pain(.*)/i, ["We have a variety of pain relief medicine. Do you want to purchase?"]],
      [/(.*)rashes(.*)/i, ["We do have medicine to relieve irritation and rashes. However, it is advisable to seek medical attention first."]],
      [/(.*)(doctor|healthcare professional)(.*)/i, ["Yes, we can refer you to our in-house doctors and healthcare professionals for a checkup first.Here is their contact:0712346587"]],
      [/(deliver|delivery)/i, ["Yes, we do deliveries within the country, at an additional cost depending on your location."]],
      [/.*/i, ["Sorry, I didn't understand that. Could you ask something else?", "Can you please clarify?"]],
    ],
    sw: [
      [/(habari yako)/i, ["Habari, karibu PharmaDaily! Naweza kukusaidia vipi leo?", "Hujambo! Naweza kukusaidia vipi?"]],
      [/uko vipi\??/i, ["Niko poa, asante kwa kuuliza!", "Niko vyema, wewe je?"]],
      [/(.*)(nunua)(.*)/i, ["Tunatibu aina mbalimbali ya magonjwa kwa kuuza madawa ya kudhibiti magonjwa mbalimbali. Je, unahitaji kununua leo?", "Unakutana na tatizo gani la kiafya ambalo ungependa kujua kuhusu dawa?"]],
      [/(.*)(homa|mafua)(.*)/i, ["Ndio, tunauza dawa za kutibu mafua ya kawaida na homa. Hizi zinaweza kujumuisha ibuprofen na dawa za kupiga mvuke."]],
      [/(.*)(uchungu|maumivu)(.*)/i, ["Tunatoa aina mbalimbali za dawa za maumivu. Unahitaji kununua?"]],
      [/(.*)(upele|muwasho)(.*)/i, ["Tuna dawa za kusaidia kutuliza vipele na muwasho. Hata hivyo, ni vyema kutafuta huduma ya daktari kwanza."]],
      [/(.*)(daktari)(.*)/i, ["Ndio, tunaweza kukuunganisha na madaktari wetu na wataalamu wa afya kwa uchunguzi kwanza."]],
      [/(uwasilishaji)/i, ["Ndio, tunatoa huduma ya uwasilishaji ndani ya nchi, kwa gharama ya ziada kulingana na eneo lako."]],
      [/.*/i, ["Pole, sijaelewa hiyo. Unaweza kuuliza kitu kingine?", "Tafadhali fafanua zaidi?"]],
    ]
  };

  const getBotResponse = (input) => {
    const pairs = responses[language];
    for (let [pattern, replyOptions] of pairs) {
      if (pattern.test(input)) {
        return replyOptions[Math.floor(Math.random() * replyOptions.length)];
      }
    }
    return "Sorry, something went wrong.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    const botMessage = input.toLowerCase() === 'quit'
      ? { sender: 'bot', text: language === 'en' ? "Goodbye! Have a nice day." : "Kwaheri! Uwe na siku njema." }
      : { sender: 'bot', text: getBotResponse(input) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      <div className="container my-5 flex-grow-1">
        <div className="card rounded-4 shadow-lg bg-secondary bg-gradient text-white">
          <div className="card-body">
            <h3 className="text-center mb-4">💬 Healthcare Assistant</h3>

            <div className="mb-3 text-end">
              <label htmlFor="language-selector" className="me-2">🌐 Language:</label>
              <select
                id="language-selector"
                className="form-select w-auto d-inline"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="sw">Swahili</option>
              </select>
            </div>

            <div
              className="p-3 border rounded-4 bg-dark-subtle mb-3"
              style={{ height: '400px', overflowY: 'auto' }}
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`d-flex mb-2 ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                >
                  <div
                    className={`px-3 py-2 rounded-3 ${
                      msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'
                    }`}
                    style={{ maxWidth: '70%' }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="d-flex gap-2">
              <input
                type="text"
                className="form-control rounded-pill px-4 py-2 shadow-sm"
                style={{ backgroundColor: '#1e1e2f', color: '#fff', border: '1px solid #555' }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
              />
              <button className="btn btn-primary rounded-pill px-4" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChatBot;
