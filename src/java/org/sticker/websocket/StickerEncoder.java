/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.sticker.websocket;

/**
 *
 * @author Joselyn
 */
import java.io.IOException;
import java.io.Writer;
import javax.json.JsonObject;
import javax.json.JsonWriter;
import javax.json.spi.JsonProvider;
import javax.websocket.EncodeException;
import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;

public class StickerEncoder implements Encoder.TextStream<Sticker> {

  @Override
  public void encode(Sticker sticker, Writer writer) throws EncodeException, IOException {
    JsonProvider provider = JsonProvider.provider();
    JsonObject jsonSticker = provider.createObjectBuilder()
            .add("action", "add")
            .add("x", sticker.getX())
            .add("y", sticker.getY())
            .add("sticker", sticker.getImage())
            .build();
    try (JsonWriter jsonWriter = provider.createWriter(writer)) {
      jsonWriter.write(jsonSticker);
    }
  }

  @Override
  public void init(EndpointConfig ec) {
  }

  @Override
  public void destroy() {
  }
}