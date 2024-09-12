import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { RoomServices } from "./Room.service";

const createRoom = catchAsync(async (req, res) => {
  const result = await RoomServices.createRoomIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Room added successfully",
    data: result,
  });
});

const getSingleRoom = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await RoomServices.getSingleRoomFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Room retrieved successfully",
    data: result,
  });
});

const getAllRooms = catchAsync(async (req, res) => {
  const result = await RoomServices.getAllRoomsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Rooms retrieved successfully",
    data: result,
  });
});

const updateRooms = catchAsync(async (req, res) => {
  const { id } = req.params;
  const room = req.body;
  //   console.log(room);
  const result = await RoomServices.updateRoomsIntoDB(id, room);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Room updated successfully",
    data: result,
  });
});

const deleteRoom = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await RoomServices.deleteRoomFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Room deleted successfully",
    data: result,
  });
});

export const RoomControllers = {
  createRoom,
  getSingleRoom,
  getAllRooms,
  updateRooms,
  deleteRoom,
};
