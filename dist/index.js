"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT || 5000;
mongoose_1.default.connect(process.env.MONGO_URI).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err));
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, compression_1.default)());
app.get('/', (_req, res) => {
    return res.send('❤️😘🤣🤣🤣🍟🍔');
});
app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map